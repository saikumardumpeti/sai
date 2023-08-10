# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TestName(Document):
	pass
@frappe.whitelist(allow_guest=True)
def aa(types):
	# print(frappe.db.get_list("TestName", filters = {
	# 	'status': 'Open'
	# }, fields = ['first_name', 'last_name']))
	# print(frappe.db.get_list("TestName", pluck = "first_name"))
	# print(frappe.db.set_value('TestName', 'f2f9b843cb', {'first_name': 'Hello'}))
	# print(frappe.db.count("TestName"))
	# print(frappe.db.count('TestName', {'status': 'Open'}))
	# frappe.db.set_value('TestName', 'e5c97ed3c7', 'first_name', "Sai" )
	# user = frappe.db.exists("TestName", "e5c97ed3c7")
	# print(user)
	# print(frappe.db.get_list('TestName', filters = {
	# 	'first_name': ['like', '%S%']
	# }))
	# print(frappe.db.get_value('TestName', as_dict=1))
	# print(frappe.db.get_single_value('SingleDoc', 'first_name'))
	
    doc = frappe.db.exists("Activity Type", types)
    if doc == types:
        return {"doc": doc}
    else:
        return {"doc": None}




