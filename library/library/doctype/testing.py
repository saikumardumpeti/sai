import frappe
from frappe.model.document import Document

@frappe.whitelist(allow_guest=True)
def aa(doctype):
    doc = frappe.get_doc("Parent Document", doctype)
    return doc


   