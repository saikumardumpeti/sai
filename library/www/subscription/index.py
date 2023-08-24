import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.model.document import Document
from datetime import datetime

@frappe.whitelist()
def create_subscription(email_id, itemId):
    user = frappe.get_doc("User", {"email": email_id})
    
    # Check if the customer already exists
    existing_customer = frappe.get_all("Customer", filters={"customer_name": user.full_name}, limit=1)
    
    if not existing_customer:
        customer = frappe.new_doc("Customer")
        customer.update({
            "customer_name": user.full_name,
            "customer_type": "Individual",
            "customer_group": "Individual",
            "territory": "All Territories"
        })
        customer.insert(ignore_permissions=True)
        
        contact = frappe.get_doc("Contact", {"email_id": email_id})
        contact.append('links', dict(
            link_doctype='Customer', link_name=customer.name))
        contact.save(ignore_permissions=True)
        
    else:
        customer = frappe.get_doc("Customer", existing_customer[0]["name"])
    
    so = frappe.new_doc("Sales Order")
    so.company = "KCS"
    so.customer = customer.name
    so.order_type = "Sales"
    so.delivery_date = datetime.today()
    
    # Fetch customer's default price list and currency
    
    so.selling_price_list = customer.default_price_list
    so.currency = frappe.get_value('Price List', so.selling_price_list, 'currency')
    
    item_name = frappe.get_value("Item", {"name": itemId}, "name")
    
    so.append("items", {
        "item_code": item_name,
        "qty": 1
    })
    
    # Save the Sales Order    
    so.flags.ignore_permissions = 1
    so.flags.ignore_mandatory = True
    so.save(ignore_permissions=True)
    so.submit()

    return so.name