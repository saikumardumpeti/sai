# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime

class State(Document):
	pass
@frappe.whitelist(allow_guest=True)
def aa(totalUnits, therapyPlan):
	doc = frappe.get_doc("Therapy Plan", therapyPlan)
	startDate = doc.start_date
	endDate = doc.end_date
	units = doc.units
	diff = endDate - startDate
	weeks = diff.days // 7 
	consumedUnits = int(units) // weeks
	remainingUnits = doc.remaining_units - int(totalUnits)
	print(remainingUnits, totalUnits)
	diff = endDate - startDate
	weeks = diff.days // 7 
	frappe.db.set_value("Therapy Plan", therapyPlan, {
		"consumed_units": float(consumedUnits),
		"number_of_weeks": int(weeks),
		"remaining_units": float(remainingUnits),
	})
	return remainingUnits, consumedUnits, units
	
@frappe.whitelist(allow_guest=True)
def get_consumed_units(therapyPlan):
	doc = frappe.get_doc("Therapy Plan", therapyPlan)
	units = doc.units
	consumedUnitsPerWeek = doc.consumed_units
	
	return units, consumedUnitsPerWeek
