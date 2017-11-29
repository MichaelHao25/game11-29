$('.room-add-col-inf ul li i').click(function(){
	$(this).parents('ul').find('li').removeClass('active');
	$(this).parent('li').addClass('active');
})


	$('.room-number-col .close').click(function(){
		$('.room-number').animate({"top":-8.2+"rem"},300);
		$('.alert').fadeOut()
	})
	
	$('.room-number-col .close').click(function(){
		$('.room-number').animate({"top":-8.2+"rem"},300);
		$('.alert').fadeOut()
	})
	
$('.alert-list .close').click(function(){
		$('.alert-list').hide();
		$('.alert').fadeOut()
	})


$('.list ul li').click(function(){
	$('.alert').show();
	$('.alert-list').fadeIn();
})

$('.join-room').click(function(){
	$('.alert-list').hide();
	$('.room-number').animate({"top":0+"rem"},300);
})
$('.add-room').click(function(){
	$('.alert-list').hide();
	$('.room-add').animate({"top":0+"rem"},300);
})

$('.room-add .close').click(function(){
	$('.room-add').animate({"top":-8.2+"rem"},300);
	$('.alert').fadeOut()
})

$('.room-number-col p').click(function(){
	$(this).find('img').hide();
})

$('.room-number-col p input.num').blur(function(){
	if($(this).val()==' '){
		$(this).parent('p').find('img').show();
	}
})