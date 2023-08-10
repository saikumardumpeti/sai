// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee Details', {
	refresh: function(frm) {
		var elements = $('.list-row-container');

		elements.click(function() {
		console.log(elements);
	});

	}
});

