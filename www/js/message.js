


function setMessage(event) {
	if (event.keyCode!=13) {
		return;
	}
	var msg = $('#message').val();
	

	//var new_notif = $.cookie('new_notif');
	var new_notif = JSON.parse(window.localStorage.getItem('new_notif'));
	new_notif = new_notif || {};
	new_notif.message = msg;
	window.localStorage.setItem('new_notif',JSON.stringify(new_notif));
	
	//$.cookie('new_notif', new_notif);
	form.submit();
	
}
