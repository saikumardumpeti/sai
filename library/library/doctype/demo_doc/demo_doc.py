# Copyright (c) 2023, ferari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class DemoDoc(Document):
	# def validate(self):
    #         if self.first_name.lower() == "bot":
    #             frappe.throw("Error: First name cannot be 'bot'")

    pass
# @frappe.whitelist(allow_guest=True)
# def aa():

	# sales_ordocer = frappe.get_doc({
    #     "doctype": "Demo Doc",
    #     "first_name": "s",
    #     "last_name": "Sai dumpeti",
    #     "child": [
    #             {
    #             "age": 1,
    #             "class": 10,
                
    #             },
    #             ]
    #         })
	# sales_ordocer.insert(ignore_permissions=True)
    

# # Get the existing document
#     old_doc = frappe.get_doc('Demo Doc', 'Chintu')

# # Create a new document with the desired ID
#     new_doc = frappe.new_doc('Task')
#     new_doc.update({
#     'name': 'NEW_TASK_ID',
#     'first_name': old_doc.first_name,  # Copy over the values from the existing document
#     'last_name': old_doc.last_name,
#     # Add more fields as needed
#     })

# # Save the new document
#     new_doc.insert()

# # Optionally, delete the old document
#     old_doc.delete()
# create new object with keyword arguments
    # user = frappe.get_doc(doctype='Demo Doc', first_name='test@example.com')
    # user.insert()
    # frappe.rename_doc("Demo Doc", "Chintu", "Papa")
    # meta = frappe.get_meta('Demo Doc')
    # a = meta.has_field('first_name')
    # if a == True:
    #       doc = frappe.get_doc('Demo Doc', 'Papa')
    #       frappe.set_value('Demo Doc', doc.Papa, 'first_name', 'Hello')
    #       doc.reload()
    # else:
    #       print("There is no field")
    # doc = frappe.get_all('Demo Doc', filters = {'first_name': ['like', '%s%']})


    # doc = frappe.get_doc('Demo Doc')
    # old_doc = doc.get_doc_before_save()
    # if old_doc.first_name == doc.first_name:
    #       frappe.throw('There is no field')
    
    # a = frappe.get_all('Demo Doc')
    # print(a[0].first_name)
    # a = frappe.get_doc('Demo Doc', "Mai")
    # if a.docstatus == 1:
    #     a.cancel()
    # a.delete()

    #to append values to child table 
    # doc = frappe.new_doc("Demo Doc", "89de745b71")
    # doc.first_name = "Saaaaai"
    
    # doc.append("child", {
    # "age": 1,
    # "class": 2,
    # })
    # doc.insert()


   
#to get child table values from child table 
# Get the parent document
    # parent_doc = frappe.get_doc("Demo Doc", "f962f55621")
    # child_table_values = parent_doc.child
    # for row in child_table_values:
    #     a = row.age
    #     print(a)
    # doc = frappe.set_value("Demo Doc", "f962f55621", {
    #     "first_name": "sai",
    #     "last_name": "dumpeti",
    # })

    # d = frappe.db.sql("""SELECT first_name FROM `tabDemo Doc`""")
    # return d
    # doc = frappe.get_all('Demo Doc', as_list=True)
    # print(doc)
    # doc = frappe.db.get_list("Demo Doc",filters = {"first_name":"sai"}, fields=["first_name", "last_name"], as_list=True)
    # print(doc)
    # a = frappe.get_list("Demo Doc")
    # b = frappe.db.get_list("Demo Doc")
    # print(b)
    # a = frappe.db.update("Demo Doc", "f962f55621",  'first_name', 'sai dumpeti')
@frappe.whitelist(allow_guest=True)
def aa(name):
   
    doc = frappe.new_doc("Activity Type")
    doc.activity_type = name
    doc.insert()
    doc.save()
    return "Successfully Created a new activitya"



@frappe.whitelist(allow_guest=True)
def test():
    doc = frappe.get_doc("Project", filters={"customer": ["=", "sai"]})
    print(doc)


@frappe.whitelist(allow_guest=True)
def abc():
    month_of_subscription = frappe.get_doc("Item", "Paneer12", fields = '*')
    print(month_of_subscription)
