// Copyright (c) 2023, ferari and contributors
// For license information, please see license.txt
let grp_id = ""
frappe.ui.form.on('Items', {
	group_name: function(frm){
		let grp_name = frm.doc.group_name
		fetch('https://api.monday.com/v2', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI2OTQwMTc5NSwiYWFpIjoxMSwidWlkIjo0NTc2ODcxOSwiaWFkIjoiMjAyMy0wNy0xOFQwNToxODozMC4zOTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTc4NDc0NjksInJnbiI6ImFwc2UyIn0.mskfmiG3-8FzhvCJ7iVDN--CJF6HuJVHzWJtdCxJNMw'
		},
		body: JSON.stringify({
			query: 'query { boards { id, name } }'
		})
		})
		.then(response => response.json())
		.then(data => {
			const boardName = grp_name; // Replace with the actual board name you're looking for
			const boards = data.data.boards;
			const matchingBoard = boards.find(board => board.name === boardName);
			
			if (matchingBoard) {
			const boardId = matchingBoard.id;
			grp_id = parseInt(boardId)
			console.log(grp_id)
			} else {
			console.log('Board not found');
			}
		})
		.catch(error => console.error(error));

	},
	after_save: function(frm){
		let item = frm.doc.item_name
		fetch('https://api.monday.com/v2', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI2OTQwMTc5NSwiYWFpIjoxMSwidWlkIjo0NTc2ODcxOSwiaWFkIjoiMjAyMy0wNy0xOFQwNToxODozMC4zOTdaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTc4NDc0NjksInJnbiI6ImFwc2UyIn0.mskfmiG3-8FzhvCJ7iVDN--CJF6HuJVHzWJtdCxJNMw'
			},
			body: JSON.stringify({
				query: `mutation { create_item (board_id: ${grp_id}, group_id: "topics", item_name: ${item}) { id } }`
			})
			})
			.then(response => response.json())
			.then(data => {
				const itemId = data.data.create_item.id;
				console.log('Created Item ID:', itemId);
			})
			.catch(error => console.error(error));

		}
});
