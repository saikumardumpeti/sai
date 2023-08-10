// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('parentdoctable', {
	first_name: function(frm) {
	  
	//   frm.clear_table('childdocname');
  
	  // Add new rows to the child table
	  let a = frm.doc.first_name
	  var child_row = frappe.model.add_child(frm.doc, 'childdocname');
	  child_row.age = 1;
	  child_row.name1 = a;
	  // ...
  
	  //to refresh the child table
	  frm.refresh_field('childdocname');
	}
  });
  
