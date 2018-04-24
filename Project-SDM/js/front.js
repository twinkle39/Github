


$(document).ready(function(){

	//a scrollTop 방지
	$('a').click(function(){

		event.preventDefault()
	})

	$('p.bn_next a').click(function(){

		event.preventDefault()
		$('ul.banner_lst>li').eq(0).appendTo('ul.banner_lst')
	});

	$('p.bn_prev a').click(function(){

		event.preventDefault()
		$('ul.banner_lst>li').eq(6).prependTo('ul.banner_lst')
	});

	//setInterval(동작,시간)  ---> 매 '시간'마다 동작하는 메소드
	setInterval(function(){$('ul.banner_lst>li').eq(0).appendTo('ul.banner_lst')},5000);
})//ready






// 이 아래는 문화재청 js.

$(function() {
				WebMain.init();
			});

$(document).ready(function(){

	//gnb

	$('ul.gnb>li').hover(function(){

		var num = $(this).index()

		$(this).find('ul.menu').show()
		$(this).parents('#header').stop().animate({'height':'206px'},100)
	},function(){

		$(this).find('ul.menu').hide()
		$(this).parents('#header').stop().animate({'height':'156px'},100)
	})

	$('ul.menu').hover(function(){

		$(this).show()
		$(this).parents('#header').stop().animate({'height':'206px'},100)
	},function(){

		$(this).hide()
		$(this).parents('#header').stop().animate({'height':'156px'},100)
	})


	//top

	$(window).scroll(function(){

		var nowScroll = $(window).scrollTop()
		console.log(nowScroll)
			//if(nowScroll < 6500 && nowScroll > 900){
			if(nowScroll >= $('.search').position().top){
				$('p.top').fadeIn()
			} else { $('p.top').hide() }//if
	}) //scroll

	$('p.top a').click(function(){

			event.preventDefault()

			var pos = $('#header').position().top
			$('html, body').animate({scrollTop:pos})
	})


	//search

	$('div.searchBar a.btn').click(function(){

		event.preventDefault()
	})

	//info

	$("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 4,


  });

	//notice

	$('.notice ul.noticeTit>li').click(function(){

		event.preventDefault()

		$(this).siblings().find('a').removeClass('active')
		$(this).find('a').addClass('active')
		$(this).siblings().find('span').removeClass('active')
		$(this).find('span').addClass('active')
		$(this).siblings().find('ul').hide()
		$(this).find('ul').show()

	})

	$('.notice ul.noticeTit>li').eq(0).trigger('click');

	//video

	$('.video p.play a').click(function(){

		event.preventDefault()

		$('.video div.popupVid').fadeIn()
		$('p.top').fadeOut()
	})

	$('.video p.close a').click(function(){

		event.preventDefault()

		$('.video div.popupVid').fadeOut()
		$('p.top').fadeIn()
	})

	//footer

	$('#footer ul.link>li').hover(function(){

		$(this).find('ul').fadeIn(100)
	}, function(){

		$(this).find('ul').hide()
	})

	$('a').click(function(){
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    event.preventDefault();
});

})//ready
