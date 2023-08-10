# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class demotestname(Document):
	pass
@frappe.whitelist()
# def aa(a):
# 	return frappe.get_all('Testing Name',filters={"name1": a})


def aa():
	doc = frappe.get_doc("Demo Doc")
	print(doc)