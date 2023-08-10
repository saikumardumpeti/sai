# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CalculatingRange(Document):
	pass

@frappe.whitelist()
def aa():
	return frappe.get_all('Range')