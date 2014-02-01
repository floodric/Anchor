


function setContact() {
	var phone = $('#phone').val();
	

	//var new_notif = $.cookie('new_notif');
	var new_notif = JSON.parse(window.localStorage.getItem('new_notif'));
	new_notif = new_notif || {};
	new_notif.phone = phone;
	window.localStorage.setItem('new_notif',JSON.stringify(new_notif));
	
	//$.cookie('new_notif', new_notif);
	form.submit();
	
}


