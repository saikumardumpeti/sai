// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('demotestname', {
	testname: function(frm){
		// let a = frm.get_doc("Google")
		// console.log(a)
		frappe.call({
			method: "library.library.doctype.demotestname.demotestname.aa", //dotted path to server method
			args: {'a':frm.doc.testname},
			callback: function(r) {
				// if (r.message.length === 0) {
				// 	frappe.msgprint("There is no Employee with that age")

				// }
				console.log(r.message)
			}
		});
		
		frm.set_query('name1',function(){
			return {
				"filters":{
				'name1':['like', '%' + frm.doc.testname + '%']
			}
		}
		
	})
	
	}
	
});
