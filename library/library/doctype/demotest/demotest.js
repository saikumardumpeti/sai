// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Demotest', {
    refresh: function(frm){
        let a = frappe.get_route("List", "Job", "bf5479dccd")
        console.log(a)
    }
});