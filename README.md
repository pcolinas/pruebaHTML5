
* HTML5

	Elementos HTML5 usados en la web:
		- tags header, nav, video, source y footer.
		- input types date, email, number y tel.

	A destacar:

	- En el men� los <li> son enlaces que llevan a las distintas zonas de la p�g empleando los id.
	- Se ha a�adido un favicon a la web. 
	- V�deo solo en formato mp4 por sencillez a la hora de descargar y no buscar un conversor. Se a�adi�
	  una imagen de fondo ("poster") de unas raquetas de p�del. Tambi�n se puso el v�deo en silencio por
	  defecto ya que era un poco escandaloso. 


* JavaScript
	
	Empleando jQuery por simplicidad. Incluyendo el archivo jquery.min.js
	De esta manera podemos acceder a los elementos del html f�cilmente con $('class or id').

	Funcionalidades implementadas:
	
	Empezando desde arriba, vemos:

		- 'Personaliza la web': con clic en los cuadros de color cambiamos el color de la web. Para
					ello, detectando el elemento clicado, a�adimos una clase u otra al body
					que tienen asociados distintos estilos css.

		- Bajo la foto grande hay tres botones numerados para simular un slider, clicando en cada uno de
		  ellos cambiamos la foto que se muestra. En este caso empleamos un data-id para indentificar el
		  bot�n pulsado y modificamos una plantilla con la <img> y posteriormente la enganchamos al html.

		- Men�: Empleamos javaScript para saber si estamos en un plataforma m�vil y a�adirle o no la clase
			no-mobile que a�ade la propiedad css position:fixed que, en m�vil, como se tiende a hacer 
			zoom, se estropeaba y no quedaba bien.

		- En la secci�n con�cenos, por incluir algo de javaScript, se realiz� el parpadeo con cambio de color
		  del precio con un setTimeInterval. Tambi�n, el color que no es amarillo cambia dependiendo del color del fondo
		  de la web, aunque esto se realiza en la secci�n de "personalizar la web".

		- Botones para elegir funci�n en el mapa.

		- En la secci�n de reserva, como los nuevos input types no se soportan en firefox, detectamos si estamos
		  en firefox para cambiar un poco el formulario. Tambi�n conseguimos la fecha actual para ponerla por defecto
		  en el input "date".  
	
	-> APIs

		- Google Maps: creando mapas de dos maneras, con GMaps, como se realiz� en el curso y paso a paso como
			      se explica en la web de la API. Se implementaron 3 "modos".
			1. Localizaci�n de las pistas, con nombre en el marcador.
			2. Localizaci�n del usuario y de las pistas (esta fue previa a realizar la ruta y se dej� por el
			    trabajo que llev� centrar el mapa y conseguir el zoom adecuado para ver los dos marcadores)
			3. Ruta entre la localizaci�n actual y las pistas.
			** 2 y 3 dan "problemas" en chrome y movil ya que hay que activar la geolocalizaci�n.

			Tambi�n se desactiv� el zoom con scroll ya que interfer�a con el scroll de la propia web y era
			molesto.

		- localStorage: lo de personalizar el color de la web se hizo para utilizar el localStorage, por defecto
			       la web ser� azul, pero se almacenar� en localStorage la elecci�n del color.


		

	
	 
