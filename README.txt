La web pensada para el trabajo del curso es la p�gina ficticia de una empresa de alquiler de pistas de p�del, 
con sus secciones de presentaci�n, localizaci�n y reserva.

La web es un poco distinta dependiendo del navegador y del dispositivo. Se detallan las diferencias en cada secci�n.

* HTML5

	Elementos HTML5 usados en la web:
		- tags header, nav, video, source y footer.
		- input types date, email, number y tel.

	A destacar:

	- En el men� los <li> son enlaces que llevan a las distintas zonas de la p�g empleando los id.
	- Se ha a�adido un favicon a la web. 
	- V�deo en formato mp4 y ogg. Se a�adi� una imagen de fondo ("poster") de unas raquetas de p�del. Tambi�n 
	se puso el v�deo en silencio por defecto ya que era un poco escandaloso. 
	- Los tel�fonos y mails son <a> con los href especiales "tel:" y "mail:to".


* CSS

	En el css destacar que se han a�adido bloques de c�digo ya programados y encontrados en la web, estos son:

	- Un reseteo de todas las propiedades por posibles problemas con las estilos predefinidos de cada navegador.

	- la clase clearfix, que ayuda a resolver problemas con los float:left/right.


	Lo dem�s son propiedades habituales css, por destacar algo con lo que hubo que pegarse un poco y que hubo que
	buscar por la red:

	- los estilos asociados a la clase hand, que cambian el puntero a una mano cuando pasamos por encima de <div> y 
	<li> que son clicables.

	- El position:fixed asociado a la clase 'not-mobile' del men�. En principio se hab�a aplicado al men�, 
	pero en dispositivos m�viles quedaba mal al hacer zoom y en chrome desaparec�a a veces haciendo scroll y 
	clicando en los <li>.

	- Tambi�n en el men� se quitaron los "bullets" de la <ul> con list-style-type: none.

	- Se emple� la propiedad li:not(:first-child) para que solo se sombrearan los <li> que tienen enlace a las 
	secciones de la web, ya que el primer elemento es el t�tulo "Men�".

	- Desactivaci�n del text-decoration en los <a> para que no aparezcan subrayados y en azul, y en morado 
	una vez visitados.


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
		
		- Tambi�n cambian las fotos ellas solas cada 5 segundos haciendo uso de un setInterval.

		- Men�: Empleamos javaScript para saber si estamos en un plataforma m�vil y a�adirle o no la clase
			no-mobile que a�ade la propiedad css position:fixed que, en m�vil, como se tiende a hacer 
			zoom, se estropeaba y no quedaba bien. Tambi�n se quita la propiedad en el chrome, ya que
			al entrar a la web ya subida a github desde chrome, el men�, que se desplazaba con el scroll, 
			desaparec�a y reaparec�a al moverse y, sobre todo, al hacer clic e ir a las distintas secciones.
			
			Tambi�n miramos el tama�o de la ventana, ya que al hacerla peque�a, las palabras se sal�an 
			del recuadro, por ello, a partir de un determinado tama�o, fijamos un width al men� y lo 
			anclamos como en los casos anteriores. 

		- En la secci�n con�cenos, por incluir algo de javaScript, se realiz� el parpadeo con cambio de color
		  del precio con un setInterval. Tambi�n, el color que no es amarillo cambia dependiendo del color 
		  del fondo de la web, aunque esto se realiza en la secci�n de "personalizar la web".

		- Botones para elegir funci�n en el mapa.

		- En la secci�n de reserva, como los nuevos input types no se soportan en firefox, detectamos si 
		estamos en firefox para cambiar un poco el formulario. Tambi�n conseguimos la fecha actual para
		ponerla por defecto en el input "date". Sacamos un alert con los datos introducidos si todo est�
		correcto, si no, pedimos que se introduzcan los datos en los campos que se dejaron vac�os.
	
	-> APIs

		- Google Maps: creando mapas de dos maneras, con GMaps, como se realiz� en el curso y paso a paso como
			      se explica en la web de la API. Se implementaron 3 "modos".
			1. Localizaci�n de las pistas, con nombre en el marcador.
			2. Localizaci�n del usuario y de las pistas (esta fue previa a realizar la ruta y se dej� 
			por el trabajo que llev� centrar el mapa y conseguir el zoom adecuado para ver los dos 
			marcadores).
			3. Ruta entre la localizaci�n actual y las pistas.
			** 2 y 3 dan "problemas" en chrome y movil ya que hay que activar la geolocalizaci�n.

			Tambi�n se desactiv� el zoom con scroll ya que interfer�a con el scroll de la propia web y 
			era molesto.

		- localStorage: lo de personalizar el color de la web se hizo para utilizar el localStorage, por defecto
			       la web ser� azul, pero se almacenar� en localStorage la elecci�n del color.


		

	
	 
