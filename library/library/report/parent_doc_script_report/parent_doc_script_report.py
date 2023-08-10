# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns, data = [], []
	columns = [
        {
            'fieldname': 'first_name',
            'label': 'First Name',
            'fieldtype': 'Data',
	        'options':'First Name'
            
        },
        {
            'fieldname': 'last_name',
            'label': 'Last Name',
            'fieldtype': 'Data',
            'options': 'Last Name'
        },
        {
            'fieldname': 'full_name',
            'label': 'Full Name',
            'fieldtype': 'Data',
            'options': 'Full Name'
        },
    ]
    
	data = frappe.db.sql("""SELECT * FROM `tabparent doc`""")
    
	return columns, data
