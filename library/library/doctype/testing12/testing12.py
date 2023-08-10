# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class testing12(Document):
	pass
from frappe import get_all

def search_records():
    # Define the doctype you want to search in
    doctype = "testing12"

    # Define the fields you want to search on
    search_fields = ["first_name", "last_name", "full_name"]

    # Define the filters for the search
    filters = {
        "doctype": doctype,
        "filters": {
            "or": []
        }
    }

    # Add search conditions for each field
    for field in search_fields:
        filters["filters"]["or"].append({field: ["like", "%{}%".format()]})

    # Perform the search
    search_results = get_all(filters)

    return search_results
