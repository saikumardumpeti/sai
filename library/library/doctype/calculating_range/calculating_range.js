// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Calculating Range', {
	onload: function(frm){
		frappe.call({
			method: "python3.10.site-packages.pip._vendor.rich._timer.timer", //dotted path to server method
			callback: function(r) {
				console.log(r)
			}
		});
	},

	 code: function(frm) {
		
		var hrs = frm.doc.hours
		console.log(hrs);
		var units = [];
		
		for(let i = 0; i<frm.doc.range.length;i++){
			let a = frm.doc.range[i].max_hours
			let b = frm.doc.range[i].min_hours
			let u = frm.doc.range[i].units
			if (b <= hrs && a >= hrs){
				frm.set_value('units',u)
				break
			}
		}
		

		// frm.doc.Range.every(function(row) {
        //     frappe.model.set_value(row.name, 'units', max+min);
        // });
	
		
	}
});
