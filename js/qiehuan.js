

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

//点击注册按钮 弹出注册
$('.sure_btn').click(function(){
  $('.masked').css('display','block');
  $('.tc_register').css('display','block');
})

//点击注册框里的确认 弹出成功
$('.btn1,.register_closed').click(function(){
  $('.masked').css('display','block');
  $('.tc_register').css('display','none');
  $('.tc_success_compeleted').css('display','block');
})

$('.ok,.success_closed').click(function(){
  $('.masked').css('display','none');
  $('.tc_success_compeleted').css('display','none');
})

// 注册框里面切换
$('.register ul li').mouseover(function(){
  $(this).addClass('active').siblings().removeClass('active');
  $(".conText").eq($(this).index()).show().siblings(".conText").hide();
  })
  
  // 注册框里面获取焦点
  $(".text_content1").focus(function(){
    if($(this).val()=='Enter email address'){
    $(this).val("")
  }
  });
  $(".text_content1").blur(function(){
    if($(this).val()==''){
    $(this).val("Enter email address")
  }
  })	
  

// $('.register_closed').click(function(){
//   // $(this).parents('.tc_register').css('display','none');
//   // $('.masked').css('display','none');

//   $('.masked').css('display','block');
//   $('.tc_register').css('display','none');
//   $('.tc_success_compeleted').css('display','block');
// })
// $('.masked').click(function(){
//   $('.tc_register').css('display','none');
//   $('.masked').css('display','none');
// })

//   $('.tc_title .closed').click(function(){
//       $(this).parents('.tc_success_compeleted').css('display','none');
//       $('.masked').css('display','none');
//  })
    





