frappe.ui.form.on('User', {
    onload: function(frm) {
        // Hide the 'field1' and 'field2' fields
        console.log("hello")
        frm.set_df_property('document_follow_notifications_section', 'hidden', 1);
        frm.set_df_property('api_access', 'hidden', 1);

        frm.set_df_property('mobile_no', 'Phone', 1);
        frm.fields_dict['mobile_no'].df.fieldtype = 'Date';

        frm.refresh();
        
    }

});
