// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt
var a = null;
frappe.ui.form.on('Time And Duration', {
  onload: function(frm) {
    const startDate = new Date();
    const startHours = startDate.getHours();
    const startMinutes = startDate.getMinutes();
    const startSeconds = startDate.getSeconds();

    a = new Date(0, 0, 0, startHours, startMinutes, startSeconds).getTime();
  },

  after_save: function(frm) {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const b = new Date(0, 0, 0, currentHours, currentMinutes, currentSeconds).getTime();
    const timeDifference = b - a;

    const durationInHours = timeDifference / (1000 * 60 * 60);
    const durationInHoursRounded = durationInHours.toFixed(2);

    frm.set_value('duration', durationInHoursRounded);
  }
});
