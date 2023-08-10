// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Apis', {
	refresh: function(frm) {
		fetch('http://127.0.0.1:8002/api/method/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				usr: 'Administrator',
				pwd: '191919'
			})
		})
		.then(r => r.json())
		.then(r => {
			console.log(r);
		})
	}
});
