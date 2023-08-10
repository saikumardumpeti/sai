frappe.ui.form.on('Therapy Plan', {
    after_save: function(frm) {
        let units = frm.doc.units
        frm.set_value("remaining_units", units)
        let startDate = new Date(frm.doc.start_date);
        let endDate = new Date(frm.doc.end_date);
        let total = endDate - startDate;
        let differenceInWeeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
        
         let totalUnits = frm.doc.units;
            differenceInWeeks = differenceInWeeks.toFixed(2);
        
        let consumedUnitsPerWeek = totalUnits / differenceInWeeks;
        consumedUnitsPerWeek = Number(consumedUnitsPerWeek.toFixed(3));
        console.log(consumedUnitsPerWeek)
        frm.set_value("consumed_units", consumedUnitsPerWeek);
        // let remaing_units = totalUnits - consumedUnitsPerWeek
        // frm.set_value("remaining_units", remaing_units)
        frm.set_value("number_of_weeks", differenceInWeeks)
    }
});
