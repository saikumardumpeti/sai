import frappe
from frappe.model.document import Document
@frappe.whitelist(allow_guest=True)
def get_project(project):
    doc = frappe.get_all('Task', filters={"project": project}, order_by="project ASC")
    return doc
