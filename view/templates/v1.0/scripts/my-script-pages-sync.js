hide('all');

function id(el) {
	return document.getElementById(el);
}
function hide(el) {
	id(el).style.display = 'none';//escondendo tudo
}
window.onload = function() {
	id('all').style.display = 'block';//liberando qndo terminar
	hide('loading');
	hide('table-loading');
}