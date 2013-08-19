/* Evento y función para cambiar la imagen principal dependiendo del botón que pulsemos */
$(".button").on("click", changeImg);

slideImage();

function slideImage(){
	var myTime = setInterval(changeImage, 5000)
}
function changeImg(e){
	e.preventDefault();
	var clic = $(this);
	var imgId = clic.data("id");
	changeImage(clic, imgId);
}
function changeImage(clic, imgId){
	temp = '<img class="big" src="img/image{{id}}.jpg" alt="{{alt}}">'
	este = $(this);

	if(imgId){
		id = imgId; // Si venimos de clic
	}
	else id = $(".selected").data("id")+1; //Si venimos de setInterval

	if(id > 3) id = 1;

	temp = temp.replace('{{id}}', id);

	switch(id){
		case '1':
			temp = temp.replace('{{alt}}', 'Raqueta de pádel y bolas');
			break;
		case '2':
			temp = temp.replace('{{alt}}', 'Pista de pádel desde arriba');
			break;
		case '3':
			temp = temp.replace('{{alt}}', 'Partido de pádel');
			break;
	}

	$(".big").replaceWith(temp);

	$(".button").removeClass("selected");

	if(imgId)
		clic.addClass("selected");
	else $("#"+id).addClass("selected");

	imgId = 0;
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
		height: '25em',
		scrollwheel: false
	});


	map.addMarker({
		lat: 43.378938,
		lng: -5.805685,
		title: 'Pádel Colinas'
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
		height: '25em',
		scrollwheel: false
	});

	map.addMarker({
		lat: myPlace.lb,
		lng: myPlace.mb,
		title: 'Pádel Colinas'
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
		height: '25em',
		scrollwheel: false,
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

temp_form = '<label> Nombre: <input name="client" id="client" placeholder="Escribe aquí"></label><br><label> Teléfono: <input type=tel name="telf" id="telf" placeholder="Escribe aquí"></label><br><label> Correo electrónico: <input type=email name="mail" id="mail" placeholder="hola@hola.es"></label><br><label> Fecha de reserva: <input type=date name="date" id="date" value="{{val}}"></label><br><label> Hora: <input type=number name="time" id="time" min=9 max=21 placeholder="{{plcTime}}"></label><br><button type="submit">Enviar</button><br>';
 
 // A partir de aquí es para calcular el día de hoy y ponerlo por defecto
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10)dd='0'+dd;
if(mm<10)mm='0'+mm;
today = dd+'/'+mm+'/'+yyyy;

//Comprobamos el navegador
if(navigator.userAgent.match(/firefox/i)){ //estamos en firefox
	temp_form = temp_form.replace('{{plcTime}}', 'Entre las 9.00-21.00');
}
else { // Estamos en chrome o en otro
	temp_form = temp_form.replace('{{plcTime}}', '');

}
	
temp_form = temp_form.replace('{{val}}', today);

$("#form").append(temp_form);


/* Detectar dispositivo móvil porque el menú se comportaba raro al hacer zoom*/
/* También se ha añadido el chrome ya que se comportaba de manera extraña*/

 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || navigator.userAgent.match(/chrome/i)
 ){
    $(".menu").removeClass("not-mobile");
 }
 else {
    $(".menu").addClass("not-mobile");
 }

/* Si la ventana es muy pequeña, fijamos tamaño del menú y la poscición*/

if($(window).width() < 700){
	$(".menu").addClass("small-wndw");
	$(".menu").removeClass("not-mobile");
}

/* Si al redimensionar la ventana la dejamos muy pequeña */

$(window).resize(function(){
	if($(window).width() < 700){
		$(".menu").addClass("small-wndw");
		$(".menu").removeClass("not-mobile");
	}	
})

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

	return false;
}