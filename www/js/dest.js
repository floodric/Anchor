

//$(document).ready(function(){ $.cookie.json=true; } );


function lookup(userLoc){
        if(userLoc === ""){
            alert('bad location');
            return;
        }
              
        var key= "key=Fmjtd%7Cluur216229%2Cb2%3Do5-90z0dy";
       
        
       // var works = "http://www.mapquestapi.com/geocoding/v1/address?key=Fmjtd|luur216229%2Cb2%3Do5-90z0dy&callback=derp&location=5000%20Forbes%20Ave%20Pittsburgh,+PA";
        //var jsondata='json='+JSON.stringify(jsondata);
        var location='location='+encodeURIComponent(userLoc);
        var callback= 'callback=found';
        var req = ["http://www.mapquestapi.com/geocoding/v1/address?",key,'&',callback,'&',location].join('');
       
		var script = document.createElement('script'); 
        script.type = 'text/javascript';  
        script.src = req; 
        document.body.appendChild(script);
		
        /*
		var script = document.createElement('script'); 
        script.type = 'text/javascript';  
        script.src = works; 
        document.body.appendChild(script);
        */
}   

var currLatLng;
window.found = function(response){
	if (response.results.length==0)
	{
		alert('fail!');
		return;
	}
		
	currLatLng = response.results[0].locations[0].latLng;
	var dest={};
	dest.lon=currLatLng.lng;
	dest.lat = currLatLng.lat;
	dest.street = response.results[0].locations[0].street;
	//var new_notif = $.cookie('new_notif');
	var new_notif = JSON.parse(window.localStorage.getItem('new_notif'));
	new_notif = new_notif || {};
	new_notif.dest = dest;
	window.localStorage.setItem('new_notif',JSON.stringify(new_notif));
	
	//$.cookie('new_notif', new_notif);
	form.submit();
       //console.log(arg);
		
	//alert(arg.results[0].locations[0].latLng.lat);
        //alert('derp');
}

function setDest() {
	var address = $('#destination').val();
	lookup(address);
	
}


