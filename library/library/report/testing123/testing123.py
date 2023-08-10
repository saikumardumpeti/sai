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
	{
		'fieldname': 'age',
            'label': 'Age',
            'fieldtype': 'Int',
    }
    ]

	data = frappe.db.sql("""
			SELECT 
				t1.first_name, t1.last_name,t1.full_name, t2.age
			FROM 
				`tabtesting12` AS t1
			JOIN 
				`tabtest123` AS t2 ON t1.first_name = t2.first_name
			
			
			""")

	return columns, data
