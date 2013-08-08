/* Evento y función para cambiar la imagen principal dependiendo del botón que pulsemos */
$(".button").on("click", changeImage);

function changeImage(){
	temp = '<img class="big" src="img/{{id}}.jpg" alt="{{alt}}">'
	
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
	if(price.hasClass("yellow-price")){
		price.removeClass("yellow-price");
		if($("body").hasClass("orange")){
			price.addClass("green-price");
		}
		else price.addClass("red-price");
	}
	
	else price.removeClass("red-price").removeClass("green-price").addClass("yellow-price");
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
		mapTypeId:google.maps.MapTypeId.ROADMAP
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
			alert("No se puede mostrar porque el navegador no permite la geolocalización. Dé permisos o use otro navegador");
			break;
		case error.POSITION_UNAVAILABLE:
			break;
			alert("No se ha podido determinar la posición");
		case error.TIMEOUT:
			alert("Timeout");
			break;
		default:
			alert("Error desconocido");
			break;
	}
}

/* localStorage para personalizar el color de la web*/

$().ready(function() {

	if (!localStorage) {
		alert(":( Tu navegador no soporta Local Storage API");
	}

	var bckgrnd = typeof localStorage["color"] == "undefined" ? "blue":localStorage["color"];

	
	$("body").addClass(bckgrnd);


	$(".color").on("click", changeColor);

	function changeColor(){

		id = $(this).data("id");

		switch(id){
			case 'blue':
				$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("blue");
				localStorage.setItem("color","blue");
				break;
			case 'green':
				$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("green");
				localStorage.setItem("color","green");
				break;
			case 'orange':
				$("body").removeClass("blue").removeClass("green").removeClass("orange").addClass("orange");
				localStorage.setItem("color","orange");
				break;
		}
	}
});

/* Cambios dependiendo del navegador empleado 
 Como firefox no reconoce algunas nuevas etiquetas de html5 haremos algún cambio en el formulario
*/

temp_form = '<label> Nombre: <input name="client" id="client" placeholder="Escribe aquí"></label><br><label> Teléfono: <input type=tel name="telf" id="telf" placeholder="Escribe aquí"></label><br><label> Correo electrónico: <input type=email name="mail" id="mail" placeholder="hola@hola.es"></label><br><label> Fecha de reserva: <input type=date name="date" id="date" placeholder="{{plcDate}}"></label><br><label> Hora: <input type=number name="time" id="time" min=9 max=21 placeholder="{{plcTime}}"></label><br><button type="submit">Enviar</button><br>';

if(navigator.userAgent.match(/firefox/i)){ //estamos en firefox
	temp_form = temp_form.replace('{{plcDate}}', 'dd/mm/aaaa');
	temp_form = temp_form.replace('{{plcTime}}', 'Entre las 9.00-21.00');
}
else { // Estamos en chrome o en otro
	temp_form = temp_form.replace('{{plcDate}}', '');
	temp_form = temp_form.replace('{{plcTime}}', '');

}

$("#form").append(temp_form);


/* Detectar dispositivo móvil porque el menú se comportaba raro al hacer zoom*/

 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    $(".menu").removeClass("not-mobile");
 }
 else {
    $(".menu").addClass("not-mobile");
 }

/* Sacar en una alerta los datos del formulario*/

$("#form").on("submit", sendData);

function sendData(){ //Simulamos un envío de los datos

	client = $("#client").val();
	telf = $("#telf").val();
	mail = $("#mail").val();
	date = $("#date").val();
	time = $("#time").val();

	if(client.length == 0 || telf.length == 0 || mail.length == 0 || date.length == 0 || time.length == 0){
		alert("Has dejado campos vacíos en el formulario");
	}
	else alert("Datos introducidos:"+"\n\nNombre: "+client+"\nTeléfono: "+telf+"\nemail: "+mail+"\nFecha: "+date+"\nHora"+time);
}