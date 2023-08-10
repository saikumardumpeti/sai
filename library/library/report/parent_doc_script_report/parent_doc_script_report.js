// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["parent doc script report"] = {
	"filters":[
		{
			"fieldname": "first_name",
			"label":__("First Name"),
			"fieldtype": "Data",
			"options": "First Name"
		},
		{
			"fieldname": "last_name",
			"label":__("Last Name"),
			"fieldtype": "Data",
			"options": "Last Name"
		},
		{
			"fieldname": "full_name",
			"label":__("Full Name"),
			"fieldtype": "Data",
			"options": "Full Name"
		},
		{
			"fieldname": "contact",
			"label":__("Contact"),
			"fieldtype": "Data",
		}
	]
};
