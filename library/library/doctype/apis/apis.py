# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Apis(Document):
	pass

@frappe.whitelist(allow_guest=True)
def get_apis(first_name=None, last_name=None, age=None):
	if frappe.local.request.method == 'GET':
		doc = frappe.db.get_list("Apis", fields = ["first_name", "last_name", "age"], ignore_permissions = True)
		if first_name != None:
			doc = frappe.db.get_list("Apis", fields = ["first_name", "last_name", "age"], filters = {"first_name": first_name})
			return doc
		return doc
	

	if frappe.local.request.method == 'POST':
		doc = frappe.new_doc("Apis")
		doc.first_name = first_name
		doc.last_name = last_name
		doc.age = age
		doc.insert(ignore_permissions=True)
		doc.save()
		return doc
	
	if frappe.local.request.method == 'PUT':
		doc = frappe.get_doc("Apis", "c2fa648690")
		doc.first_name = first_name
		doc.last_name = last_name
		doc.age = age
		doc.save(ignore_permissions=True)
		return doc

	if frappe.local.request.method == 'DELETE':
		doc = frappe.get_doc("Apis", "c2fa648690")
		doc.delete(ignore_permissions=True)
		return doc 