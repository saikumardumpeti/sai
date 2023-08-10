frappe.ui.form.on('Project', {
    after_save: function(frm){
        frappe.call({
            method: 'library.library.doctype.projects.get_project',
            args: {
                project: frm.doc.name
            },
            callback: function(r) {
                console.log(r.message[0])
                frappe.set_route('Form', 'Task', r.message[0].name);
            }
        });
        
    },
    // after_save: function(frm) {
    //     let proName = frm.doc.project_name;
    //     console.log(proName);
    //     let query = `mutation { create_board (board_name: \"${proName}\", board_kind: public) { id }}`;
      
    //     fetch("https://api.monday.com/v2", {
    //       method: 'post',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI2OTQwMTc5NSwiYWFpIjoxMSwidWlkIjo0NTc2ODcxOSwiaWFkIjoiMjAyMy0wNy0xOFQwNToxODozMC4zOTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTc4NDc0NjksInJnbiI6ImFwc2UyIn0.mskfmiG3-8FzhvCJ7iVDN--CJF6HuJVHzWJtdCxJNMw'
    //       },
    //       body: JSON.stringify({
    //         'query': query
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(res => console.log(JSON.stringify(res, null, 2)));
    //   }
      
 })



//  after_save: function(frm) {
//     var taskDocs = ['TASK-2023-00003', 'TASK-2023-00004', 'TASK-2023-00005', 'TASK-2023-00006', 'TASK-2023-00007'];
//     var currentIndex = taskDocs.indexOf(frm.doc.name) + 1;

//     if (currentIndex < taskDocs.length) {
//         var taskDoc = taskDocs[currentIndex];
//         frappe.set_route('Form', 'Task', taskDoc);
//     }
// }