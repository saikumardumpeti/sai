frappe.ui.form.on('Therapy Type', {
    after_save: function(frm) {
        console.log("Triggered before_save");
        console.log(frm.doc.therapy_type);
        frappe.call({
            method: 'library.library.doctype.testname.testname.aa',
            args: {
                types: frm.doc.therapy_type
            },
            callback: function(response) {
                console.log("Callback executed");
                console.log(response);
                var docName = response.message.doc; // Access the 'doc' key in the response
                if (!docName) {
                    let d = new frappe.ui.Dialog({
                        title: 'Create Activity Type',
                        size: 'small',
                        primary_action_label: 'Yes',
                        primary_action(values) {
                            console.log(values);
                            frappe.call({
                                method: 'library.library.doctype.demo_doc.demo_doc.aa',
                                args: {
                                    name: frm.doc.therapy_type
                                },
                                callback: function(response) {
                                    console.log(response);
                                    frappe.msgprint('Activity type created successfully.');
                                }
                            });
                            d.hide();
                        },
                        secondary_action_label: 'No',
                        secondary_action() {
                            d.hide();
                            frappe.msgprint('Activity type creation canceled.');
                        }
                    });
                    d.show();
                }
            }
        });
    }
});
