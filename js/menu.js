$(function(){
	$.get('menu.html', function(data){
		$('nav#menu').html(data);
	});
});