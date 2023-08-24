# import frappe
# from frappe.website.website_generator import WebsiteGenerator
# from frappe.model.document import Document

# @frappe.whitelist(allow_guest=True)
# def aa():
#     args = frappe.form_dict
#     argument_value = args.get('argument')
#     print(argument_value)  # This will print the value of the 'argument' parameter



#     if argument_value == "All":
#         website_items = frappe.get_all("Website Item")
#         for j in website_items:
#             frappe.db.set_value("Website Item", j.name, "published", 1)
#             frappe.db.commit()

#     seattle_data = []
#     presented_data = []
#     if argument_value == "Seattle":
#         print("Helloooooooo")
#         e_commerce_settings = frappe.get_doc("E Commerce Settings")
#         e_commerce_settings.price_list = "Standard Selling"
#         e_commerce_settings.insert(ignore_permissions=True)
#         e_commerce_settings.save(ignore_permissions=True)
#         frappe.db.commit()

#         item_price = frappe.get_all("Item Price")

#         for i in item_price:
#             a = frappe.get_doc("Item Price", i.name)
#             if a.price_list != "Standard Selling":
#                 seattle_data.append(a.item_code)
#             elif a.price_list == "Standard Selling":
#                 presented_data.append(a.item_code)

#         website_items = frappe.get_all("Website Item")

#         for l in presented_data:
#             for m in website_items:
#                 d = frappe.get_doc("Website Item", m.name)
#                 if l in d.item_code:
#                     dd = frappe.db.set_value("Website Item", m.name, "published", 1)
#                     frappe.db.commit()

#         for k in seattle_data:   
#             for j in website_items:
#                 d = frappe.get_doc("Website Item", j.name)
#                 print(d.web_item_name)
#                 print(k)
#                 if k in d.item_code:
#                     dd = frappe.db.set_value("Website Item", j.name, "published", 0)
#                     frappe.db.commit()


#     toronto_data = []
#     toronto_present = []
#     if argument_value == "Toronto":
#         e_commerce_settings = frappe.get_doc("E Commerce Settings")
#         e_commerce_settings.price_list = "USD SELLING"
#         e_commerce_settings.insert(ignore_permissions=True)
#         e_commerce_settings.save(ignore_permissions=True)
#         frappe.db.commit()
#         item_price = frappe.get_all("Item Price")
#         for i in item_price:
#             a = frappe.get_doc("Item Price", i.name)
#             if a.price_list != "USD SELLING":
#                 toronto_data.append(a.item_code)
#             elif a.price_list == "USD SELLING":
#                 toronto_present.append(a.item_code)

#         website_items = frappe.get_all("Website Item")

#         for k in toronto_data:
#             for j in website_items:
#                 d = frappe.get_doc("Website Item", j.name)
#                 if k in d.item_code:
#                     dd = frappe.db.set_value("Website Item", j.name, "published", 0)
#                     frappe.db.commit()
#         for l in toronto_present:
#             for m in website_items:
#                 d = frappe.get_doc("Website Item", m.name)
#                 if l in d.item_code:
#                     dd = frappe.db.set_value("Website Item", m.name, "published", 1)
#                     frappe.db.commit()
            
    
#     vancouver_data = []
#     vancouver_present = []
#     if argument_value == "Vancouver":
#         print("Helloooooooo")
#         e_commerce_settings = frappe.get_doc("E Commerce Settings")
#         e_commerce_settings.price_list = "test"
#         e_commerce_settings.insert(ignore_permissions=True)
#         e_commerce_settings.save(ignore_permissions=True)
#         frappe.db.commit()

#         item_price = frappe.get_all("Item Price")
#         for i in item_price:
#             a = frappe.get_doc("Item Price", i.name)
#             if a.price_list != "test":
#                 vancouver_data.append(a.item_code)
#             elif a.price_list == "test":
#                 vancouver_present.append(a.item_code)

#         website_items = frappe.get_all("Website Item")

#         for x in vancouver_data:
#             for y in website_items:
#                 d = frappe.get_doc("Website Item", y.name)
#                 if x in d.item_code:
#                     dd = frappe.db.set_value("Website Item", y.name, "published", 0)
#                     frappe.db.commit()
#         for l in vancouver_present:
#             for m in website_items:
#                 d = frappe.get_doc("Website Item", m.name)
#                 if l in d.item_code:
#                     dd = frappe.db.set_value("Website Item", m.name, "published", 1)
#                     frappe.db.commit()
#     return "Jjbjbdjb"
        

# @frappe.whitelist()
# def bbb():
#     doc = frappe.get_list('Website Item', fields='*', filters={'published': 1})
#     res = []
#     for item in doc:
#         item_data = frappe.get_doc('Website Item', item['name'], fields='*')
#         res.append([item_data.website_image, item_data.route, item_data.item_name])
#     return res