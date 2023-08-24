import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.model.document import Document

@frappe.whitelist(allow_guest=True)
def aa():
    args = frappe.form_dict
    argument_value = args.get('argument')

@frappe.whitelist(allow_guest=True)
def bb():
    args = frappe.form_dict
    argument_value = args.get('argument')
    item_names = []
    if argument_value == "Seattle":

        d = frappe.get_doc('E Commerce Settings')
        d.price_list = 'Standard Selling'
        d.insert(ignore_permissions=True)
        frappe.db.commit()

        INR_items = frappe.get_list('Item', fields='item_name', filters={'item_group': 'Fencing'})
        for i in INR_items:
            item_names.append(i['item_name'])
    
        item_codes = []
        for i in item_names:
            filters = {
                'item_name': i,
                'currency': 'INR',
                'price_list': 'Standard Selling' # Add your additional filter here
            }
            item_price = frappe.get_list('Item Price', fields='item_code', filters=filters)
            item_codes += item_price
    
        website_items = frappe.get_list('Website Item', filters={'item_group': 'Fencing'})
    
        render_elements = []
        for m in item_codes:
            for k in website_items:
                website = frappe.get_doc('Website Item', k['name'])
                if m['item_code'] in website.item_code:
                    render_elements.append([website.website_image, website.item_name, website.route])
        
    
    

    item_names = []
    if argument_value == "Toronto":

        d = frappe.get_doc('E Commerce Settings')
        d.price_list = 'USD SELLING'
        d.insert(ignore_permissions=True)
        frappe.db.commit()

        INR_items = frappe.get_list('Item', fields='item_name', filters={'item_group': 'Fencing'})
        for i in INR_items:
            item_names.append(i['item_name'])
    
        item_codes = []
        for i in item_names:
            filters = {
                'item_name': i,
                'currency': 'USD',
                'price_list': 'USD SELLING' # Add your additional filter here
            }
            item_price = frappe.get_list('Item Price', fields='item_code', filters=filters)
            item_codes += item_price
    
        website_items = frappe.get_list('Website Item', filters={'item_group': 'Fencing'})
    
        render_elements = []
        for m in item_codes:
            for k in website_items:
                website = frappe.get_doc('Website Item', k['name'])
                if m['item_code'] in website.item_code:
                    render_elements.append([website.website_image, website.item_name, website.route])


    item_names = []
    if argument_value == "Vancouver":
        INR_items = frappe.get_list('Item', fields='item_name', filters={'item_group': 'Fencing'})
        for i in INR_items:
            item_names.append(i['item_name'])
    
        item_codes = []
        for i in item_names:
            filters = {
                'item_name': i,
                'currency': 'EUR',
                'price_list': 'test' # Add your additional filter here
            }
            item_price = frappe.get_list('Item Price', fields='item_code', filters=filters)
            item_codes += item_price
    
        website_items = frappe.get_list('Website Item', filters={'item_group': 'Fencing'})
    
        render_elements = []
        for m in item_codes:
            for k in website_items:
                website = frappe.get_doc('Website Item', k['name'])
                if m['item_code'] in website.item_code:
                    render_elements.append([website.website_image, website.item_name, website.route])

    
    return render_elements
    