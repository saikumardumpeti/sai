# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ChildDocument(Document):
	@frappe.whitelist(allow_guest=True)
	def list_all_parent_docs(self, doctype=None):
		data = frappe.get_all(doctype, fields=["first_name"])

		for d in data:
			self.append("parent_list", {
				"first_name": d.first_name,
				"last_name": d.last_name,
				"age": d.age
			})
