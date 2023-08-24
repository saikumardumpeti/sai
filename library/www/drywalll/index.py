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
    
        INR_items = frappe.get_list('Item', fields='item_name', filters={'item_group': 'Drywall'})
        for i in INR_items:
            item_names.append(i['item_name'])
    
        item_codes = []
        for i in item_names:
            filters = {
                'item_name': i,
                'currency': 'INR',
                'price_list': 'Standard Selling' # Add your additional filter here
            }
            item_price = frappe.get_list('Item Price', fields=['item_code', 'price_list_rate', 'currency'], filters=filters)
            item_codes += item_price
    
        website_items = frappe.get_list('Website Item', filters={'item_group': 'Drywall'})
    
        render_elements = []
        for m in item_codes:
            for k in website_items:
                website = frappe.get_doc('Website Item', k['name'])
                if m['item_code'] in website.item_code:
                    render_elements.append([website.website_image, website.item_name, website.route, m['price_list_rate'], m['currency']])
        
    
    

    item_names = []
    if argument_value == "Toronto":
        d = frappe.get_doc('E Commerce Settings')
        d.price_list = 'USD SELLING'
        d.save(ignore_permissions=True)
    
        INR_items = frappe.get_list('Item', fields='item_name', filters={'item_group': 'Drywall'})
        for i in INR_items:
            item_names.append(i['item_name'])
    
        item_codes = []
        for i in item_names:
            filters = {
                'item_name': i,
                'currency': 'USD',
                'price_list': 'USD SELLING' # Add your additional filter here
            }
            item_price = frappe.get_list('Item Price', fields=['item_code', 'price_list_rate', 'currency'], filters=filters)
            item_codes += item_price
    
        website_items = frappe.get_list('Website Item', filters={'item_group': 'Drywall'})
    
        render_elements = []
        for m in item_codes:
            for k in website_items:
                website = frappe.get_doc('Website Item', k['name'])
                if m['item_code'] in website.item_code:
                    render_elements.append([website.website_image, website.item_name, website.route, m['price_list_rate'], m['currency']])


    
    return render_elements
    