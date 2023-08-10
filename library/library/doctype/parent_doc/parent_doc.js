// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('parent doc', {
	// refresh: function(frm) {
	// 	frappe.msgprint(__("Hello world"))
	// }
	// onload: function(frm){
	// 	frappe.msgprint("Hello this is onload event")
	// }
	// validate: function(frm) {
	// 	frappe.throw("Validate Event")
	// },
	// age: function(frm){
	//  	frappe.throw("Age event")
	// }
	// validate: function(frm){
	// 	frm.set_value("full_name", frm.doc.first_name+" "+frm.doc.last_name)
	// }
	// refresh: function(frm){
	// 	if(frm.is_new()){
	// 		let d = new frappe.ui.Dialog({
	// 			titile: 'Enter the Parent Details',
	// 			fields:[{
	// 				label: 'First Name',
	// 				fieldname: 'first_name',
	// 				fieldtype: 'Data'
	// 			},
	// 			{
	// 				label: 'Last Name',
	// 				fieldname: 'last_name',
	// 				fieldtype: 'Data'
	// 			},
	// 			{
	// 				label: 'Age',
	// 				fieldname: 'age',
	// 				fieldtype: 'Data'
	// 			},
	// 		],
	// 		primary_action_label: 'submit',
	// 		primary_action(values){
	// 			frm.set_value('first_name', values.first_name)
	// 			frm.set_value('last_name', values.last_name)
	// 			frm.set_value('age', values.age)
	// 			d.hide()
	// 		}
	// 		})
	// 		d.show()
	// 	}
		
	// }
	// refresh: function(frm) {
	// 	frm.add_custom_button('Click Me', () => {
	// 		frappe.msgprint(__('You Clicked!!'));
	// 	})
	// }
	enable: function(frm){
		let row = frm.add_child('date_and_values',{
			date:'01-06:2023',
			value1: 10,
			value2: 20
		})
		frm.refresh_field('date_and_values')
	}
	
});
