$(".button").on("click", changeImage);

function changeImage(){
	temp = '<img class="big" src="img/{{id}}.jpg">'
	console.log("hola");
	id = $(this).data("id");

	temp = temp.replace('{{id}}', id);

	$(".big").replaceWith(temp);


}