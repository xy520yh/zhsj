// JavaScript Document
$(function(){
	//弹窗点击
   $('.sure_btn').click(function(){
	   $('.masked').css('display','block');
	   $('.tc_success').css('display','block');
   })
   $('.closed').click(function(){
	   $(this).parent().parent().css('display','none');
	   $('.masked').css('display','none');
   })
   $('.masked').click(function(){
	   $('.tc_success').css('display','none');
	   $('.masked').css('display','none');
   })


   // 导航位置连接到对应屏幕
	   $('.n01,.btn-reservation,.n02').click(function(){
		   jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
	   });
	   // $('.n02').click(function(){
	   // 	jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
	   // });
	   $('.n03').click(function(){
		   jQuery('html,body').animate({scrollTop:$('#pro3').offset().top}, 1000);
	   });
	   $('.n04').click(function(){
		   jQuery('html,body').animate({scrollTop:$('#pro5').offset().top}, 1000);
	   });
	   $('.n05,#five').click(function(){
		   jQuery('html,body').animate({scrollTop:$('#pro6').offset().top}, 1000);
	   });
	   

	   // 返回顶部
	   $("#gotop").click(function(){
			   jQuery("html,body").animate({scrollTop:0},1000);
	   });	
	   $(window).scroll(function() {
			   if ( $(this).scrollTop() > 300){
				   $('#gotop').fadeIn("fast");
			   } else {
				   $('#gotop').stop().fadeOut("fast");
			   }
	   });
	   
	   //第七屏special角色切换
			var swiper = new Swiper('.box3', {
				slidesPerView: 'auto',
				centeredSlides: true,
				loop: true,
				loopedSlides: 5,
				pagination: '.swiper-pagination',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			
			});
	   // 3d滚动
	   var swiper = new Swiper('.part5_container', {
		slidesPerView: 3,
		spaceBetween: 70,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		 
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  });
						   
   })



// $(document).ready(function(){		
		
// $('.list_ul li').click(function(){
// 		$(this).addClass('active').siblings('li').removeClass('active');
// });
// });

