// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Server', {
	// after_save: function(frm) {
	// // 	// let full_name = frm.doc.first_name+frm.doc.last_name
	// // 	// frappe.throw(`Hello ${full_name}`)
	// 	for (let row of frm.doc.family_members) {
	// 		frappe.msgprint(__("'{0}'. The family member name is '{1}' and realation is '{2}", [row.idx,row.name1,row.relation]))
	// 		// frappe.throw(`The Family member name is ${row.name1} `)
	// 	}
	// },
	// refresh: function(frm)  {{
	// 	frappe.msgprint("Hello")
		
	// }
	// onload: function(frm) {
	// 	frappe.msgprint("Hello this is onload")
	// 	console.log(frm)
	// }
	// 
	// before_save: function(frm){
	// 	frappe.throw("Hellow this is before save event ")
	// }
	// 
	// enable: function(frm) {
	// 	frappe.msgprint("Hello thi is enable event")
	// },

	// age: function(frm) {
	// 	frappe.msgprint("hello this is age event")
	// },
	// family_members_on_form_rendered: function(frm){
	// 	frappe.msgprint("Hello this is family members child table event")
	// }
	// before_submit: function(frm){
	// 	frappe.throw("Hello this is before submit event")
	// }
	// on_submit: function(frm){
	// 	frappe.msgprint("Hello this is on submit event")
	// }
	// refresh: function(frm){
	// 	frm.add_custom_button('create client',()=>{
	// 		frappe.new_doc('Library Membership',{
	// 			library_member: frm.doc.name
	// 		})
	// 	})
	// }
// validate: function(frm) {
// 	frappe.throw("Hello D-Code from 'validate' event")
// }
// before_cancel: function(frm){
// 	frappe.throw("Hello this is before cancel event")
// }
// after_cancel: function(frm) {
// 	frappe.throw("Hello this is after cancel event")
// }


// frappe.ui.form.on('Family Members', {
// 	// name1: function(frm) {
// 	// 	frappe.msgprint("Hello this is from child doctype name1 event")
// 	// }
// 	age(frm, cdt, cdn) {
// 		frappe.msgprint("Hello this is from child doctype field event")
// 	}
// refresh: function(frm){
// 	frm.set_value({
// 		last_name: 'Dumpeti',
// 		first_name: "Saikumar"
// 	})
// }
// refresh(frm){
// 	frm.save('Submit')

refresh: function(frm){
frappe.confirm(
    'Are you sure to leave this page?',
    function(){
        window.close();
    },
    function(){
        show_alert('Thanks for continue here!')
    }
)
}

});

