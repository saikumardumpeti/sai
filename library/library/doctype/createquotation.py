import frappe
from frappe.model.document import Document
# from frappe import get_doc, new_doc
@frappe.whitelist(allow_guest=True)

def aa():
    sales_order = frappe.get_doc({
        "doctype": "Quotation",
        "quotation_to": "Customer",
        "customer": "Sai dumpeti",
        "transaction_date": "2013-02-23",
        "items": [
            {
                "item_code": "1234",
                "qty": 10.0,
                
            }
        ]
    })
    sales_order.insert(ignore_permissions=True)
    sales_order.save()
    sales_order.submit()
