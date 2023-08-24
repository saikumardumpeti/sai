// frappe.provide("bellamar.views");
// var customer_is_pro = "{{is_pro}}";
// var customer_address = null;
// var glb_item_code = null;
// var glb_price_list_rate = null;
// var glb_coupon = null;

// $(document).ready(function () {
// 	$('.btn-order-coupon').on('click', function() {
// 		$("#join-pro-manual-coupon").val($(this).attr("data-name"));
// 	});
// 	$('#cart-billing-address').change(function() {
// 		$("#cart-billing-address-display").empty();
// 		get_address_display();
// 	});
// 	$('#cart-billing-address').val("");
// 	// get_address_display();

// 	$('#submit-dlg-customer_address').on('click', function() {
// 		if(customer_address && glb_item_code && glb_price_list_rate){
// 			$('#dlg-customer_address').modal("hide");
// 			submit_place_order_pro();
// 		}		
// 	});

// });

// var get_address_display = function(){
// 	$address = $('#cart-billing-address');
// 	customer_address = $address.val();
// 	if (customer_address=="" || !customer_address){
// 		return false;
// 	}
// 	if(customer_address=="Create New Address"){
// 		open_address_new("Billing");
// 		return false;
// 	}
// 	frappe.call({
// 		method: 'frappe.contacts.doctype.address.address.get_address_display',
// 		args: {
// 			"address_dict": customer_address
// 		},
// 		callback: function(r) {
// 			$("#cart-billing-address-display").html(`
// 			<div class="panel panel-default">
// 				<div class="panel-collapse">
// 					<div class="panel-body text-muted small">
// 					${r.message}	
// 					</div>
// 				</div>
// 			</div>
// 			`);
// 		}
// 	});	
// }
// var submit_place_order_pro = function(){
// 	$("body").addClass("loading");
// 	frappe.callq({
// 		type: "POST",
// 		method: "bellamar_website.utils.utils.place_order_pro",
// 		args:{
// 			item_code : glb_item_code,
// 			price_list_rate : glb_price_list_rate,
// 			coupon: glb_coupon,
// 			// customer_address: customer_address,
// 		},
// 		callback: function(r) {
// 			$("body").removeClass("loading");
// 			if(!r.exc) {
// 				if(r.message.error ){
// 					swal(r.message.error);	
// 				}
// 				if(r.message.name){
// 					window.location.href = "/orders/" + encodeURIComponent(r.message.name);
// 				}
// 			}
// 		}
// 	});
// }

// var place_order_pro = function(item_code, price_list_rate, coupon){
// 	if(frappe.session.user==="Guest") {
// 		if(localStorage) {
// 			localStorage.setItem("last_visited", window.location.pathname);
// 		}
// 		window.location.href = "/login";
// 	}else if(customer_is_pro=="1"){
// 		swal({
// 			text:  __("Already subscribed")
// 		})
// 	} else {
// 			glb_item_code = item_code;
// 			glb_price_list_rate = price_list_rate;
// 			glb_coupon = coupon;
// 			// select_customer_address();
// 			submit_place_order_pro();
// 		}
// 	return false;
// }

// var select_customer_address = function(){
// 	$('#dlg-customer_address').modal('show');
// }

// var open_address_new = function(address_type="Shipping"){
// 	var me = this;
// 	if(d_address == undefined){
// 		var d_address = new frappe.ui.Dialog({
// 			title: __("Add New Address"),
// 			fields: [
// 				{
// 					fieldtype: "HTML", fieldname: "address_template",
// 				}
// 			],
// 			primary_action: function() {
// 				var data = web_form_address.get_values();
// 				if (!data) {
// 					return false;
// 				}
// 				frappe.callq({
// 					type: "POST",
// 					method: "frappe.website.doctype.web_form.web_form.accept",
// 					args: {
// 						data: data,
// 						web_form:  web_form_address_name,
// 					},
// 					freeze: true,
// 					callback: function(r) {
// 						if(!r.exc) {
// 							html_field.empty();
// 							d_address.hide();
// 							load_address_list(r.message.name);
// 						}
// 					}
// 				});
// 			},
// 			primary_action_label: __('Save')
// 		});
// 	}
// 	var html_field = d_address.fields_dict.address_template.$wrapper;
// 	html_field.empty();

// 	var wrapper = html_field;
// 	var web_form_address_name = "addresses";
// 	var web_form_address_doctype = "Address";

// 	var web_form_address = new bellamar.views.WebForm({
// 		wrapper: html_field,
// 		allow_incomplete: 0,
// 		doctype: web_form_address_doctype,
// 		docname: "",
// 		web_form_name: web_form_address_name
// 	});

// 	setTimeout(() => {
// 		let cart_project = $("#cart_project").val();
// 		if(cart_project!="No Project" &&  cart_project!="Create New Project"){
// 			web_form_address.set_value("project", cart_project);
// 		}
// 		web_form_address.set_value("address_type", address_type);

// 		html_field.find('[data-fieldname="address_type"]').attr("disabled", true);

// 		if(address_type=="Billing"){				
// 			html_field.find('[data-fieldname="is_primary_address"]').attr("disabled", true); 
// 			html_field.find('[data-fieldname="is_shipping_address"]').prop('checked', false);
// 		}
// 		if(address_type=="Shipping"){
// 			html_field.find('[data-fieldname="is_shipping_address"]').attr("disabled", true); 
// 			html_field.find('[data-fieldname="is_primary_address"]').prop('checked', false);
// 		}

// 		html_field.find('input[data-fieldname="address_line1"]').attr("readonly", true);
// 		html_field.find('input[data-fieldname="address_line2"]').attr("readonly", true);
// 		html_field.find('input[data-fieldname="city"]').attr("readonly", true);
// 		html_field.find('input[data-fieldname="state"]').attr("readonly", true);
// 		html_field.find('input[data-fieldname="pincode"]').attr("readonly", true);
// 		html_field.find('input[data-fieldname="country"]').attr("readonly", true);
					
// 		html_field.find('#google_map_address').html(`
// 		<div class="pac-card control-input" style="width: 50%;" id="pac-card">
// 			<label style ="margin-left:3px;" for="pac-input">Address</label>
// 			<input id="pac-input" class="input-with-feedback form-control"  placeholder="Enter the Address"  style="width: 100%;margin-bottom:4px" 	type="text">
// 		</div>

// 		<div id="map" style="width: 100%; height: 380px;"></div>

// 		<div id="infowindow-content">
// 			<img height="16" id="place-icon" src="" width="16">
// 			<span class="title" id="place-name"></span><br>
// 			<span id="place-address"></span>
// 		</div>`);
// 		initMapWebForm(web_form_address);
// 	}, 2000);

// 	d_address.show();
// }

// var load_address_list = function(selected=""){
// 	var arr_address = {
// 		"" : "Please choose Address",
// 		"Create New Address" : "Create New Address",
// 	};
// 	var $address = $("#cart-billing-address");
// 	return frappe.callq({
// 		type: "POST",
// 		method: "library.www.subscription.index.get_custom_billing_address_docs",
// 		callback: function(r) {
// 			if (!r.exc) {
// 				for (var i = 0; i < r.message.length; i++) {
// 					arr_address[r.message[i].name] = r.message[i].name;
// 				}
// 			}
// 			bellamar.utils.optionJSON($address, arr_address, selected); 
// 			$address.trigger("change");
// 		}
// 	});
// };

// var x = [];
// var x1 = [];

// frappe.call({
// 	method: 'bellamar_website.utils.api.get_phone',
// 	callback: function (r) {
// 		for (var i = 0; i < r.message.length; i++) {
// 			x.push(r.message[i].name);
// 			x1.push(r.message[i].mobile_no);
// 			break;
// 		}
// 	}
// });

// function initMapWebForm(webform) {
// 	// Initiate map with the origin address
// 	webform.set_value('email_id',x);
//     webform.set_value('phone',x1);


// 	var directionsService = new google.maps.DirectionsService;
// 	var directionsDisplay = new google.maps.DirectionsRenderer;
// 	var geocoder = new google.maps.Geocoder();
// 	var input = document.getElementById('pac-input');
// 	var autocomplete = new google.maps.places.Autocomplete(input);
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 15,
// 		center: { lat: 43.887501, lng: -79.428406 },
// 	});

// 	// Bind the map's bounds (viewport) property to the autocomplete object,
// 	// so that the autocomplete requests use the current map bounds for the
// 	// bounds option in the request.
// 	autocomplete.bindTo('bounds', map);

// 	var infowindow = new google.maps.InfoWindow();
// 	var infowindowContent = document.getElementById('infowindow-content');
// 	infowindow.setContent(infowindowContent);
// 	var marker = new google.maps.Marker({
// 		map: map,
// 		anchorPoint: new google.maps.Point(0, -29)
// 	});

// 	autocomplete.addListener('place_changed', function () {
// 		infowindow.close();
// 		marker.setVisible(false);
// 		var place = autocomplete.getPlace();
// 		if (!place.geometry) {
// 			// User entered the name of a Place that was not suggested and
// 			// pressed the Enter key, or the Place Details request failed.
// 			window.alert("No details available for input: '" + place.name + "'");
// 			return;
// 		}

// 		// If the place has a geometry, then present it on a map.
// 		if (place.geometry.viewport) {
// 			map.fitBounds(place.geometry.viewport);
// 		} else {
// 			map.setCenter(place.geometry.location);
// 			map.setZoom(17);  // Why 17? Because it looks good.
// 		}
// 		marker.setPosition(place.geometry.location);
// 		marker.setVisible(true);

// 		var address = ' ';
// 		if (place.address_components) {
// 			address = [
// 				(place.address_components[0] && place.address_components[0].short_name || ''),
// 				(place.address_components[1] && place.address_components[1].short_name || ''),
// 				(place.address_components[2] && place.address_components[2].short_name || '')
// 			].join(' ');
// 		}

// 		infowindowContent.children['place-icon'].src = place.icon;
// 		infowindowContent.children['place-name'].textContent = place.name;
// 		infowindowContent.children['place-address'].textContent = address;
// 		infowindow.open(map, marker);



// 		var componentForm = {
// 			street_number: 'short_name',
// 			route: 'long_name',
// 			locality: 'long_name',
// 			administrative_area_level_1: 'short_name',
// 			country: 'long_name',
// 			postal_code: 'short_name'
// 		};

// 		var componentFormValue = {
// 			street_number: '',
// 			route: '',
// 			locality: '',
// 			administrative_area_level_1: '',
// 			country: '',
// 			postal_code: ''
// 		};

// 		for (var i = 0; i < place.address_components.length; i++) {
// 			for (var j=0; j<place.address_components[i].types.length; j++){
// 			  let addressType = place.address_components[i].types[j];
// 			  if (componentForm[addressType]) {
// 				let val = place.address_components[i][componentForm[addressType]];
// 				componentFormValue[addressType] = val;
// 			  }
// 			}
// 		}
// 		var combine_address= componentFormValue['street_number'] + " " + componentFormValue['route'];
//         	webform.set_value('address_line1', combine_address);


// 		//webform.set_value('address_line1', componentFormValue['street_number']);
// 		//webform.set_value('address_line2', componentFormValue['route']);

// 		webform.set_value('city', componentFormValue['locality']);
// 		webform.set_value('state', componentFormValue['administrative_area_level_1']);
// 		webform.set_value('pincode', componentFormValue['postal_code']);
// 		webform.set_value('country', componentFormValue['country']);

// 	});
// }



