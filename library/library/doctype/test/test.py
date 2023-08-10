# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class Test(WebsiteGenerator):
	pass
@frappe.whitelist(allow_guest=True)
def aa():
	dd = frappe.db.set_value("Website Item", "WEB-ITM-0010", "published", 0)
	frappe.db.commit()
