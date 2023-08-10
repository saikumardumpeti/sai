# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class QuarterlyReviewForm(Document):
	pass
def aa():
	doc = frappe.get_doc("DocType","Quarterly Review Form")
	doc.append('fields',{
	'label':"Based on recent interview/conversation, describe the client's/family's",
	'fieldname':"Based on recent interview/conversation",
	'fieldtype':'Long Text',
	'options':'',
	})
	doc.save()


