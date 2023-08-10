// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Server Side Script', {
	// refresh: function(frm) {

	// }
	first_name: function(frm){
		frappe.call({
			method:"library.demo.doctype.client_side_server.client_side_server.frappe_call",
			args: {
				msg: "Hello"
			},
			freeze: true,
			callback: function(r){
				frappe.msgprint(r.message)
			}
		
	})
	}
});
