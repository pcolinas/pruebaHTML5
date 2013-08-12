
* HTML5

	Elementos HTML5 usados en la web:
		- tags header, nav, video, source y footer.
		- input types date, email, number y tel.

	A destacar:

	- En el menú los <li> son enlaces que llevan a las distintas zonas de la pág empleando los id.
	- Se ha añadido un favicon a la web. 
	- Vídeo solo en formato mp4 por sencillez a la hora de descargar y no buscar un conversor. Se añadió
	  una imagen de fondo ("poster") de unas raquetas de pádel. También se puso el vídeo en silencio por
	  defecto ya que era un poco escandaloso. 


* JavaScript
	
	Empleando jQuery por simplicidad. Incluyendo el archivo jquery.min.js
	De esta manera podemos acceder a los elementos del html fácilmente con $('class or id').

	Funcionalidades implementadas:
	
	Empezando desde arriba, vemos:

		- 'Personaliza la web': con clic en los cuadros de color cambiamos el color de la web. Para
					ello, detectando el elemento clicado, añadimos una clase u otra al body
					que tienen asociados distintos estilos css.

		- Bajo la foto grande hay tres botones numerados para simular un slider, clicando en cada uno de
		  ellos cambiamos la foto que se muestra. En este caso empleamos un data-id para indentificar el
		  botón pulsado y modificamos una plantilla con la <img> y posteriormente la enganchamos al html.

		- Menú: Empleamos javaScript para saber si estamos en un plataforma móvil y añadirle o no la clase
			no-mobile que añade la propiedad css position:fixed que, en móvil, como se tiende a hacer 
			zoom, se estropeaba y no quedaba bien.

		- En la sección conócenos, por incluir algo de javaScript, se realizó el parpadeo con cambio de color
		  del precio con un setTimeInterval. También, el color que no es amarillo cambia dependiendo del color del fondo
		  de la web, aunque esto se realiza en la sección de "personalizar la web".

		- Botones para elegir función en el mapa.

		- En la sección de reserva, como los nuevos input types no se soportan en firefox, detectamos si estamos
		  en firefox para cambiar un poco el formulario. También conseguimos la fecha actual para ponerla por defecto
		  en el input "date".  
	
	-> APIs

		- Google Maps: creando mapas de dos maneras, con GMaps, como se realizó en el curso y paso a paso como
			      se explica en la web de la API. Se implementaron 3 "modos".
			1. Localización de las pistas, con nombre en el marcador.
			2. Localización del usuario y de las pistas (esta fue previa a realizar la ruta y se dejó por el
			    trabajo que llevó centrar el mapa y conseguir el zoom adecuado para ver los dos marcadores)
			3. Ruta entre la localización actual y las pistas.
			** 2 y 3 dan "problemas" en chrome y movil ya que hay que activar la geolocalización.

			También se desactivó el zoom con scroll ya que interfería con el scroll de la propia web y era
			molesto.

		- localStorage: lo de personalizar el color de la web se hizo para utilizar el localStorage, por defecto
			       la web será azul, pero se almacenará en localStorage la elección del color.


		

	
	 
