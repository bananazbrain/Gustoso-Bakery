$(document).ready(function(){
	var menu = {
		list: $('.menu__list'),
		nav : $('.menu__nav')
	}

	menu.list.slick({
		fade: true,
		asNavFor: menu.nav,
		arrows: false
	});

	menu.nav.slick({
		slidesToShow: 3,
		asNavFor: menu.list,
		focusOnSelect: true,
		variableWidth: true
	});
	
});