# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Demotest(Document):
	# def before_save(self):
	# 	print(self.firt_name)
	pass
# @frappe.whitelist(allow_guest=True)
# def aa():
# 	return frappe.db.get_list("Employee Details", filters = {
# 		'employee_name': 'sai'
# 	}, fields = ['employee_name', 'age'])

 	# print(frappe.db.get_list("Employee Details", pluck = "employee_name"))
# 	# print(frappe.db.set_value('TestName', 'f2f9b843cb', {'first_name': 'Hello'}))
# 	# print(frappe.db.count("TestName"))
# 	# print(frappe.db.count('TestName', {'status': 'Open'}))
# 	# frappe.db.set_value('TestName', 'e5c97ed3c7', 'first_name', "Sai" )
# 	# user = frappe.db.exists("TestName", "e5c97ed3c7")
# 	# print(user)
# 	# print(frappe.db.get_list('TestName', filters = {
# 	# 	'first_name': ['like', '%S%']
# 	# }))
# 	# print(frappe.db.get_value('TestName', as_dict=1))
# 	# print(frappe.db.get_single_value('SingleDoc', 'first_name'))
# 	# doc = frappe.get_doc('Demotest', 'a4ff244602')
# 	# doc.title = 'Test'
# 	# doc.save()
# 	# doc = frappe.get_doc({
# 	# 	'doctype': 'Demotest',
# 	# 	'title': 'New Task'
# 	# })
# 	# doc.insert()
# 	# doc = frappe.get_doc({
# 	# 	'doctype': 'Quotation',
# 	# 	'naming_series': 'SAL-QTN-YYY.-',
# 	# 	'transaction_date': '20-06-2023',
# 	# 	'order_type': 'Sales',
# 	# 	'quotation_to': 'Customer',
# 	# 	'customer_name': 'Sai Dumpeti',
# 	# 	'customer': 'Sai Dumpeti'
# 	# })
# 	# doc.append("Items", {
# 	# 	"item_code": "1234",
# 	# 	"qty": 1
# 	# })
# 	# doc.insert()
# 	# doc.save()
# 	doc = frappe.get_doc("Demotest")
# 	print(doc)
	# fields = [
    #         {
    #             "first_name": "Sai",
    #             "last_name":"Dumpeti",
                
    #         },
    #         {
    #             "first_name": "Sai",
    #             "last_name":"Dumpeti",
    #         }
    #     ]
    
    #     # Get the doctype object
	# doctype = frappe.get_doc("Demotest")
    
    #     # Add the fields to the doctype
	# for field in fields:
	# 	doctype.append("fields", field)
    
    #     # Save the changes
	# doctype.save()
	# task = frappe.get_last_doc("Demotest")
	# print(task)
    # user = frappe.get_doc(doctype = "Demotest", first_name = "Sai", last_name = "Dumpeti", status = "Open")
    # user.insert()
	# task = frappe.get_list("Demotest", filters = {"status": "Open"})
	# print(task)
	# doc = frappe.new_doc('Demotest')
	# doc.title = "Hello"
	# doc.insert()
	# frappe.delete_doc("Demotest", "1413783618")
	# doc =frappe.get_doc({
	# 	"doctype": "Demotest",
	# 	"first_name": "Sai",
	# 	"childtable": [
	# 		{
	# 			"name1":"Sai",
	# 			"initial": "D"			}
	# 	]
	# })
	# doc.insert(ignore_permissions=True)
	# doc = frappe.get_doc("Demotest", "Hello17")
	# doc.append("childtable", {
	# 	"name1": "Sai",
	# 	"initial": "D"
	# })
	# frappe.db.set_value("Demotest", "Hello02", "first_name", "Sai")
	# def set_multiple_values(doctype, docname, fileds):
	# 	for field, value in fileds.items():
	# 		frappe.db.set_value(doctype, docname, field, value)
	# fileds = {
	# 	"first_name": "Saikumar",
	# 	"last_name": "Dumpeti"
	# }
	# set_multiple_values("Demotest", "Hello17",fileds )

	# #to get single values
	# subject = frappe.db.get_value("Demotest", "Hello18", "first_name")
	# print(subject)
	
	# #to get multiple values
	# First_name = frappe.db.get_list("Demotest")
	# print(First_name)

	# # as dict
	# demo_disc = frappe.db.get_value('Demotest', 'Hello18', ['first_name', 'last_name'], as_dict=1)
	# print(demo_disc.first_name)

	# # with filters, will return the first record that matches filters
	# a, b = frappe.db.get_value("Demotest", {'status': 'Open'}, ['first_name', 'last_name'])
	# print(a)

	# # update a field value
	# frappe.db.set_value("Demotest", "Hello19", "first_name", "Sai")

	# update multiple values
	# frappe.db.set_value("Demotest", "Hello02", {
	# 	'first_name': 'Sai',
	# 	'last_name': 'Dumpeti',
	# 	'status':'Open',
	# 	'description': 'Hello hw r u'
	# })
	# doc = frappe.db.exists("Demotest", "Hello18", cache=False)
	# print(doc)
	# frappe.db.set_value("Proceedings", "PC-00001", {
		
	# 	"proceedings_name": "HEy"
	# })

	# # total number of Task records
	# a = frappe.db.count('Demotest', {'status': 'Close'})
	# print(a)
	
	# frappe.db.set_value("doctype":"")
	# return frappe.db.sql("""SELECT first_name FROM `tabDemotest`""", as_dict=True)

	# doc = frappe.get_doc("DocType","Demotest")
	# doc.append('fields',{
	# 	'label':'aa',
	# 	'fieldname':'bb',
	# 	'fieldtype':'Data',
	# 	'options':'',
	# 	'insert_after':"roll_no",
	# 	#'depends_on':'eval:doc.field_name',
	# 	'reqd':0
	# })
	# doc.save()
# @frappe.whitelist(allow_guest=True)
# def aa(theropyType, duration):
#     doc = frappe.get_doc({
#         "doctype": "Timesheet",
#         "time_logs": [
#             {"hours": float(duration), "activity_type": theropyType}
#         ]
#     })

#     doc.insert(ignore_permissions=True)
#     doc.save()
#     return "Created Successfully"
# def aa(task):
# 	doc = frappe.get_all("Task", filters={'project': ['=', task]}, fields=["project"])
# 	print(doc)


