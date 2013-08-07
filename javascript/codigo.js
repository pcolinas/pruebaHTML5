/* Evento y función para cambiar la imagen principal dependiendo del botón que pulsemos */
$(".button").on("click", changeImage);

function changeImage(){
	temp = '<img class="big" src="img/{{id}}.jpg">'
	console.log("hola");
	id = $(this).data("id");

	temp = temp.replace('{{id}}', id);

	$(".big").replaceWith(temp);


}

/* Función para cambiar el color del precio */
price = $(".price");

setInterval(function(){ 
	if(price.hasClass("yellow"))
		price.removeClass("yellow").addClass("red");
	
	else price.removeClass("red").addClass("yellow");
}
,1000);

/* Mostrar mapa con localización de las pistas*/

navigator.geolocation.getCurrentPosition(handleGeolocation, handleErrors);



function handleGeolocation(position) {

	var myPlace 	= new google.maps.LatLng(43.378938,-5.805685);
	var yourPlace 	= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	
	map = new GMaps({
		div: '#map',
		lat: (43.378938 + position.coords.latitude)/2,
		lng: (-5.805685 + position.coords.longitude)/2,
		height: '500px',
	});
	
	map.addMarker({
		lat: 43.378938,
		lng: -5.805685,
		title: 'Padel Colinas'
	});

	map.addMarker({
		lat: position.coords.latitude,
		lng: position.coords.longitude,
		title: 'Tú'
	});

	var bounds = new google.maps.LatLngBounds();
	bounds.extend(myPlace);
	bounds.extend(yourPlace);
	map.fitBounds(bounds);

	
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
	

	var request = {
		origin: yourPlace,
		destination: myPlace,
		travelMode: google.maps.TravelMode.DRIVING
	};
	

	directionsService.route(request, function(result, status) {
    	if (status == google.maps.DirectionsStatus.OK) {
     	 	directionsDisplay.setDirections(result);
    	}
  	});

} 

function handleErrors(error){
	switch(error.code)
	{
		case error.PERMISSION_DENIED:
			alert("The location acquisition process failed because the document does not have permission to use the Geolocation API.");
			break;
		case error.POSITION_UNAVAILABLE:
			break;
			alert("The position of the device could not be determined");
		case error.TIMEOUT:
			alert("Timeout");
			break;
		default:
			alert("Something bad and unknown - happened");
			break;
	}
}

	//handleGeolocation();
	//handleErrors();