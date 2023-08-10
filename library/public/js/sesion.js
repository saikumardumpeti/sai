var a = null;
var totalUnits = "";
var unitsPerWeek = "";
var remainingUnits = "";
let consumedUnits = "";
let tunits = "";
frappe.ui.form.on('Therapy Session', {

    onload: function(frm){

        
        let therapyPlan = frm.doc.therapy_plan
        frappe.call({
            method: 'library.library.doctype.state.state.get_consumed_units',
            args: {
                therapyPlan : therapyPlan
            },
            callback: function(r) {
                totalUnits = r.message[0]
                unitsPerWeek = r.message[1]
                console.log(totalUnits)
            }
        });
    },

    after_save: function(frm){
        let units = frm.doc.codification_table[0]["units"]
        // console.log(typeof(units))
        let therapyPlan = frm.doc.therapy_plan

        frappe.call({
            method: 'library.library.doctype.state.state.aa',
            args: {
                totalUnits : units,
                therapyPlan : therapyPlan
            },
            callback: function(r) {
                remainingUnits = r.message[0]
                consumedUnits = r.message[1]
                tunits = r.message[2]
                let consumedUnitsPerWeek = ""
                
                console.log(r.message)
            }
        });
        
    },
    before_save: function(frm){
        if (tunits - remainingUnits > unitsPerWeek){
            frappe.throw("Your Weekly Units Limit Has Been Reached")
        }
    }

});
