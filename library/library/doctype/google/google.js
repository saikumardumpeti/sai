// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

// function getage(){
	
// }
let a = null;
frappe.ui.form.on('Employee Details', {
	refresh: function(frm){
		a = frm.get_doc("Employee Details")
		
	}
});
frappe.ui.form.on('Google', {
	num: function(frm){
		//console.log(frm)
		// let a = frm.get_doc("Google")
		// console.log(a)
		frappe.call({
			method: "library.library.doctype.google.google.aa", //dotted path to server method
			args: {'age':frm.doc.num},
			callback: function(r) {
				if (r.message.length === 0) {
					frappe.msgprint("There is no Employee with that age")
				}
			}
		});
		
		frm.set_query('age',function(){
			return {
				"filters":{
				'age':['=',frm.doc.num]
			}
		}
		
	})
	
	}
	

})