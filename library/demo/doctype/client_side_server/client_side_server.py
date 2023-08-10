# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ClientSideServer(Document):
    # doc = frappe.get_all("client_side_server")
    # print(doc)
	# print("Hello")
    pass
# def add_fields():
        
#         fields = [
#             {
#                 "fieldname": "field1",
#                 "label":("Field 1"),
#                 "fieldtype": "Data",
#                 "insert_after": "field_name"
#             },
#             {
#                 "fieldname": "field2",
#                 "label":("Field 2"),
#                 "fieldtype": "Link",
#                 "options": "Doctype",
#                 "insert_after": "field_name"
#             }
#         ]
    
#         # Get the doctype object
#         doctype = frappe.get_doc("Client Side Server", "43182fe328")
    
#         # Add the fields to the doctype
#         for field in fields:
#             doctype.append("fields", field)
    
#         # Save the changes
#         doctype.save()
    
@frappe.whitelist()
def frappe_call(msg):
    import time
    time.sleep(5)
    frappe.msgprint(msg)
    # return "Hi This message from frappe_call"