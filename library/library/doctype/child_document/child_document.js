// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Child Document', {
	list_all_parent_doc: function(frm){
		frm.call({
			method: 'list_all_parent_docs',
			doc: frm.doc,
			args: {
				doctype : 'Parent Document',
			},
			callback: function(r) {
				console.log(r.mesage)
			}
		});
	}
});
