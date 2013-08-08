/* Evento y función para cambiar la imagen principal dependiendo del botón que pulsemos */
$(".button").on("click", changeImage);

function changeImage(){
	temp = '<img src="img/{{id}}.jpg" alt="{{alt}}">'
	console.log("hola");
	id = $(this).data("id");

	temp = temp.replace('{{id}}', id);

	switch(id){
		case 'image1':
			temp = temp.replace('{{alt}}', 'Raqueta de padel y bolas');
			break;
		case 'image2':
			temp = temp.replace('{{alt}}', 'Pista de padel desde arriba');
			break;
		case 'image3':
			temp = temp.replace('{{alt}}', 'Partido de padel');
			break;
	}

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

/* Mostrar mapa con localización de las pistas usando la libreria gmaps.js proporcionada en los ejemplos*/

showMap();
function showMap() {
	
	map = new GMaps({
		div: '#map',
		lat: 43.378938,
		lng: -5.805685,
		height: '500px',
	});
	
	map.addMarker({
		lat: 43.378938,
		lng: -5.805685,
		title: 'Padel Colinas'
	});
} 

/* Mostrar mapa con localización del usuario y de las pistas usando la libreria gmaps.js proporcionada en los ejemplos*/

$(".button-me").on("click", whereAmI);

function whereAmI(){
	navigator.geolocation.getCurrentPosition(myPosition, handleErrors);
}

function myPosition(position){
	
	var myPlace 	= new google.maps.LatLng(43.378938,-5.805685);
	var yourPlace 	= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	
	map = new GMaps({
		div: '#map',
		height: '500px',
	});

	map.addMarker({
		lat: myPlace.lb,
		lng: myPlace.mb,
		title: 'Padel Colinas'
	});

	map.addMarker({
		lat: position.coords.latitude,
		lng: position.coords.longitude,
		color: 'blue',
		title: 'Tú'
	});
	
	var bounds = new google.maps.LatLngBounds();
	bounds.extend(myPlace);
	bounds.extend(yourPlace);
	map.fitBounds(bounds);
}

/* Mostrar ruta desde ubicación actual hasta pistas creando el mapa como se indica en la API */

$(".button-route").on("click", setRoute);

function setRoute(){
	navigator.geolocation.getCurrentPosition(handleGeolocation, handleErrors);
}

function handleGeolocation(position){

	var directionsDisplay;	
	var directionsService = new google.maps.DirectionsService();
	var map;
	var myPlace 	= new google.maps.LatLng(43.378938,-5.805685);
	var yourPlace 	= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	directionsDisplay = new google.maps.DirectionsRenderer();

	var mapOptions = {
		height: '500px',
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
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

/* Eventos y funciones para personalizar el color de la web*/

$(".color").on("click", changeColor);

function changeColor(){

	id = $(this).data("id");

	switch(id){
		case 'blue':
			$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("blue");
			break;
		case 'green':
			$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("green");
			break;
		case 'orange':
			$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("orange");
			break;
	}


}
