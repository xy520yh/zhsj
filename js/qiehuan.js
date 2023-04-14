
function rePosition(){
  var width = document.documentElement.clientWidth || document.body.clientWidth;
  var ratio = width/750;
  if(width<=750){
      document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
  }else{
      document.getElementsByTagName('html')[0].style.fontSize="100px";
  }
}
rePosition();
window.onresize = function(){
  rePosition();
};          

$(function () {
 /*part8--花灵*/ 
  var flowerswiper = new Swiper('.part8_swiper',{
      loop:true, initialSlide: 8,
      autopaly:true,
      slideToClickedSlide: true,
      slidesPerView: 4,
      freeMode: true,watchSlidesProgress: true,
      navigation: {
        nextEl: '.part8_menu  .swiper-button-next',
        prevEl: '.part8_menu .swiper-button-prev',
  },
  on: {
    resize: function () {
            setTimeout(function(){
              flowerswiper.update()
            },500)
            
      },
    slideChangeTransitionEnd:function(flowerswiper){ 
          var index = this.realIndex;
            //role.slideTo(swiper1.realIndex);
          $('.role .content_tro dd').eq(index).fadeIn().siblings().hide();
            var dd = $('.role .content_tro dd').eq(index);
          //  console.log(dd.length)
              $('.role .content_tro dd').hide()
              dd.show();
            //  dd.find('.role_name').addClass('animated fadeInDown');
            //  dd.find('.role_people').addClass('animated fadeInUp');
            //  dd.find('.note').addClass('animated fadeInRight');
          },
        },
  });

      
});

$(function () {
  // IOS和安卓切换
   $('.register_select div').click(function(){
      $('.register_select div').children().removeClass('active');
      $(this).addClass('active');
      $(this).siblings('div').removeClass('active');
    })
	 
// 点击首屏email
  $('.part1_email_link').click(function(){
    $(' .masked').css('display','block');
    $('.part1_tc_email').css('display','block');
  })
  $('.part1_tc_email .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
  })
  // 点击応募する
  $('.register_btn').click(function(){
    $(' .masked').css('display','block');
    $('.part3_tc_success').css('display','block');
  })
  $('.part3_tc_success .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })
  // 点击footer下
  $('.footer_tc_link').click(function(){
    $(' .masked').css('display','block');
  $('.footer_tc_tip').css('display','block');
  })
  $('.footer_tc_tip .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })


  $('.email_btn').click(function(){
    $(' .masked').css('display','block');
    $('.part1_tc_denglu').css('display','block');
    $('.part1_tc_email').css('display','none');
  })
  $('.part1_tc_denglu .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })


});