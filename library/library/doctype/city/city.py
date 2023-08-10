# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class City(Document):
	pass



@frappe.whitelist(allow_guest=True)
def addmedicode(theropyType):
    therapy_type_doc = frappe.get_doc("Therapy Type", theropyType)
    child_table_values = therapy_type_doc.get("codification_table")
    for row in child_table_values:
        a = row.medical_code
        b = row.medical_code_standard
        
        doc = frappe.get_doc({
            "doctype": "Therapy Session",
            "codification_table": [
                {"medical_code": a}
            ]
        })

        doc.insert(ignore_mandatory=True)
  
    return doc.as_dict()
