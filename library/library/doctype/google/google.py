# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Google(Document):
	pass

# def execute(filters=None):
# 	columns, data = [], []
# 	columns = [
#         {
#             'fieldname': 'age',
#             'label': 'Age',
#             'fieldtype': 'Int',
            
#         },]
	
# 	data = frappe.db.sql("""SELECT * FROM `tabGoogle` WHERE age=18""")
    
# 	return columns, data
@frappe.whitelist()
def aa(age):
	return frappe.get_all('Employee Details',filters={"age": age})
# def aa():
# 	a = frappe.get_doc('Point of Sale')
# 	print(a)
