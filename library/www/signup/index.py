import frappe
# import hashlib
# import random
from frappe import _
from frappe.core.doctype.user.user import User
# from frappe.utils import escape_html, random_string

class CustomUser(User):
    def validate(self):
        super().validate()
        # Additional validation logic if needed

@frappe.whitelist(allow_guest=True)
def create_user(full_name, email, role, password, mobile):
    
    # Create a new user
    user = frappe.new_doc("User")
    user.update({
        "email": email,
        "first_name": full_name,
        "enabled": 1,
        "new_password": password ,  
        "user_type": "Website User",
        "phone": mobile,
    })

    user.insert(ignore_permissions=True, 
    ignore_links=True,
    ignore_if_duplicate=True,
    ignore_mandatory=True)
    
    # user.add_roles('Customer')
    
    frappe.db.commit()
    return {"status": role, "message": _("User created successfully")}

@frappe.whitelist(allow_guest=True)
def get_values():
    records = frappe.get_all('User')
    return records



