$("#close-btn").click(function(){$(".navbar-collapse").removeClass('show');});$(document).ready(function(){$('.bxslider').bxSlider({auto:'',controls:false,});$('.bxslider-thumbnail').bxSlider({auto:'',pager:false,slideWidth:385,minSlides:1,maxSlides:5,moveSlides:1,slideMargin:0,speed:450,infiniteLoop:false});$(window).scroll(function(){if($(window).scrollTop()>40){$("#header").addClass("sticky");$("#topbar").addClass("hide");}else{$("#header").removeClass("sticky");$("#topbar").removeClass("hide");}});$(".tp-slider").owlCarousel({items:1,smartSpeed:800,loop:true,});$(".pv-slider").owlCarousel({items:1,smartSpeed:1000,loop:true,animateOut:'fadeOut',autoplaySpeed:true,autoplay:true});$('.oj-slide').slick({slidesToShow:1,slidesToScroll:1,arrows:false,adaptiveHeight:true,infinite:false,useTransform:true,speed:800,autoplaySpeed:4000,});$('.oj-slide-nav').on('init',function(event,slick){$('.oj-slide-nav .slick-slide.slick-current').addClass('is-active');}).slick({slidesToShow:11,slidesToScroll:11,dots:false,focusOnSelect:false,infinite:false,margin:15,prevArrow:'<span class="oj-prev"><i class="fa fa-angle-left"></i></span>',nextArrow:'<span class="oj-next"><i class="fa fa-angle-right"></i></span>',responsive:[{breakpoint:1300,settings:{slidesToShow:8,slidesToScroll:8,}},{breakpoint:991,settings:{slidesToShow:6,slidesToScroll:6,}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2,}}]});$('.oj-slide').on('afterChange',function(event,slick,currentSlide){$('.oj-slide-nav').slick('slickGoTo',currentSlide);var currrentNavSlideElem='.oj-slide-nav .slick-slide[data-slick-index="'+currentSlide+'"]';$('.oj-slide-nav .slick-slide.is-active').removeClass('is-active');$(currrentNavSlideElem).addClass('is-active');});$('.oj-slide-nav').on('click','.slick-slide',function(event){event.preventDefault();var goToSingleSlide=$(this).data('slick-index');$('.oj-slide').slick('slickGoTo',goToSingleSlide);});var inspiration=$('.inspiration');inspiration.owlCarousel({autoplay:true,smartSpeed:1000,items:1,nav:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],onInitialized:counter,onTranslated:counter});function counter(event){var element=event.target;var items=event.item.count;var item=event.item.index+1;$('#counter').html(item+"/"+items)}
$(".dream-india").owlCarousel({responsiveClass:true,nav:true,navText:['',''],responsive:{0:{items:1,},320:{items:1,},500:{items:2,},700:{items:3,},991:{items:4,}}});$(".fp-btn").click(function(e){e.preventDefault();e.stopPropagation();$("#MobileOnlyStates").addClass("open");});$("#MobileOnlyStates .crosss").click(function(e){e.preventDefault();e.stopPropagation();$("#MobileOnlyStates").removeClass("open");});setTimeout(function(){var getWinHeight=$(window).innerHeight();$('.pv-slide-section .pv-slide-item, .tp-slide-section .tp-slide-item, .oj-slide-section .oj-item, .inspiration-section .inspiration-item, .dream-india .dream-item, .journey, .home-social-block-section .fp-scrollable').css({'min-height':getWinHeight,'height':getWinHeight});$(window).resize(function(){$('.pv-slide-section .pv-slide-item, .tp-slide-section .tp-slide-item, .oj-slide-section .oj-item, .inspiration-section .inspiration-item, .dream-india .dream-item, .journey, .home-social-block-section .fp-scrollable').css({'min-height':getWinHeight,'height':getWinHeight});})},1000);setTimeout(function(){var winHeight=$(window).height();$(".ig-slider, .video-banner").css({'height':winHeight-120,'overflow':'hidden'});$(window).resize(function(){var winHeight=$(window).height();$(".ig-slider, .video-banner").css({'height':winHeight-120,'overflow':'hidden'});})},500)
$(document).on('click','a[href^="#"]:not(".nav-tabs a ,#faqPage a, .updte-pro-tab a")',function(e){var id=$(this).attr('href');var $id=$(id);if($id.length===0){return;}
e.preventDefault();var pos=$id.offset().top;$('body, html').animate({scrollTop:pos},800);});$(".bjpmember").click(function(e){e.preventDefault();e.stopPropagation();$(".client-detail-wrap").fadeIn('slow');$("body").addClass('hidden');});$(".client-detail-wrap .crosss").click(function(){$(".client-detail-wrap").fadeOut('slow');$("body").removeClass('hidden');});$('.client-detail').click(function(e){e.stopPropagation();});$(window).click(function(){$(".client-detail-wrap").fadeOut('slow');$("body").removeClass('hidden');});});$("#topbar .search").click(function(e){$("#searchAutocomplete").show();});$(document).mouseup(function(e)
{var container=$("#searchAutocomplete");if(!container.is(e.target)&&container.has(e.target).length===0)
{container.hide();}});$('.placeholder').click(function(){$(this).siblings('input').focus();});$('.required').focus(function(){$(this).siblings('.placeholder').hide();});$('.required').blur(function(){var $this=$(this);if($this.val().length==0)
$(this).siblings('.placeholder').show();});$('.required').blur();$('.clickClose').on('click',function(e){var closeFrgtBtn="true";localStorage.setItem('closeFrgtBtn',closeFrgtBtn);$('.placeholder').css('display','block');$('input[type="text"]').val('');$('input[type="password"]').val('');});$(document).ready(function(){localStorage.removeItem('closeFrgtBtn');localStorage.removeItem('closeBtn');});jQuery(document).ready(function(){$("#loginForm").on('submit',function(e){e.preventDefault();if($("#loginForm").valid()){jQuery(".loadgif").show();var header=$('#redirect').text();var email=$("#loginEmail").val();var password=$("#loginPassword").val();var data={"email":email,"password":password,"locale":lang}
$.ajax({url:siteUrl+'/Login/dologin',type:'POST',dataType:"json",data:data,async:true,success:function(data){jQuery(".loadgif").hide();$('p.error').css('display','block');if(data.success){if(data.loginWith=="email"){$("#loginErrorMsg").html(data.message);$("#loginErrorMsg").css("color","green");if(data.lastLogin!=""&&data.lastLogin!=null&&data.isPwdUpdated!=0){if(header==1){var redirectURL='/'+lang+''+'/myprofile';$(location).attr('href',redirectURL);}else{if(header==2){makebookmark();}
location.reload();}}else{$(".loginBox").hide();$(".changePwdBox").show();}}else{localStorage.setItem('EmailforOtp',data.mobileNo);localStorage.setItem('EmailforPassword',data.password);$("#otpToken").val(data.accessKey);$(".loginBox").hide();$(".otpBox").show();}}else{$("#loginErrorMsg").html(data.message);$("#loginErrorMsg").css("color","red");}}});}else{$('p.error').css('display','block');}});$("#fgtPwdForm").on('submit',function(e){e.preventDefault();if($("#fgtPwdForm").valid()){jQuery("#forgotPwd-loadgif").show();var fgtpwdemail=$("#fgtpwdemail").val();$.ajax({url:siteUrl+'/Login/forgotPwd',type:'POST',dataType:"json",data:{"email":fgtpwdemail,"locale":lang},async:true,success:function(data){jQuery("#forgotPwd-loadgif").hide();$('p.error').css('display','block');if(data.success==true){if(data.medium=="phone"){$(".fgtPwdBox").hide();$(".forgotPwdotpBox").show();$("#fgtPwdErrorMsg").html(data.message);$(".modal .error").css("color","green");localStorage.setItem('MobileforForgotOtp',data.mobile);}else{$(".modal .error").css("color","green");$("#fgtPwdErrorMsg").html(data.message);}}else{$(".modal .error").css("color","red");$("#fgtPwdErrorMsg").html(data.message);}}});}else{$('p.error').css('display','block');}});$("#forgotPwdotpForm").on('submit',function(e){e.preventDefault();if($("#forgotPwdotpForm").valid()){jQuery(".loadgif").show();var otp=$("#forgotPwdotp").val();$.ajax({url:siteUrl+'/Login/forgotPwdotpLogin',type:'POST',dataType:"json",data:{"otp":otp,"email":localStorage.getItem('MobileforForgotOtp')},async:true,success:function(data){jQuery(".loadgif").hide();if(data.success){$(".forgotPwdotpBox").hide();$('#fgtPwdBox').hide();$(".fgtPwdResetBox").show();$("#fgtPwdresetSlug").val(data.resetToken);}else{$("#ForgotPwdOTPErrorMsg").html(data.message);}}});}});$("#fgtPwdResetForm").on('submit',function(e){e.preventDefault();if($("#fgtPwdResetForm").valid()){jQuery(".fgtPwdResetLoader").show();var fgtpwdpassword=$("#fgtpwdpassword").val();var fgtpwdConfpassword=$("#fgtpwdConfpassword").val();var fgtPwdresetSlug=$("#fgtPwdresetSlug").val();$.ajax({url:siteUrl+'/Login/forgotPwdReset',type:'POST',dataType:"json",data:{"fgtpwdpassword":fgtpwdpassword,"fgtpwdConfpassword":fgtpwdConfpassword,"fgtPwdresetSlug":fgtPwdresetSlug,"locale":lang},async:true,success:function(data){jQuery(".fgtPwdResetLoader").hide();console.log(data,"hjhsa");if(data.success==true){var redirectURL='/'+lang+''+'/MyProfile';$(location).attr('href',redirectURL);$("#fgtPwdResetErrorMsg").html(data.message);$("#fgtPwdResetErrorMsg").css("color","green");}else{$("#fgtPwdResetErrorMsg").html(data.message);}}});}});$("#changePwdForm").on('submit',function(e){e.preventDefault();if($("#changePwdForm").valid()){console.log("manasa");jQuery(".loadgif").show();var oldPassword=$("#oldPassword").val();var newPassword=$("#newPassword").val();var confirmPassword=$("#confirmPassword").val();$.ajax({url:siteUrl+'/Login/firstPwdChange',type:'POST',dataType:"json",data:{"newPassword":newPassword,"confirmPassword":confirmPassword,"oldPassword":oldPassword,"locale":lang},async:true,success:function(data){console.log(data);if(data.success==true){setTimeout(function(){jQuery(".loadgif").hide();},500);if(data.previousispwdUpdated==0||data.previousispwdUpdated=="false"){$(".changePwdBox").hide();$(".saPopup").show();}else{setTimeout(function(){$('#loginModal').modal('hide');$("#changePwdForm")[0].reset();},500);}
$("#CPErrorMsg").html(data.message);$("#CPErrorMsg").css("color","green");}else{jQuery(".loadgif").hide();$("#CPErrorMsg").css({"display":"block","color":"red"});jQuery("#CPErrorMsg").html(data.message);}}});}});$("#namoLoginForm").on('submit',function(e){e.preventDefault();if($("#namoLoginForm").valid()){var email=$("#email").val();jQuery(".namo-loader").show();$.ajax({url:siteUrl+'/Login/namoLogin',type:'POST',dataType:"json",data:{"email":email,"locale":lang},async:true,success:function(data){if(data.success){jQuery(".namo-loader").hide();$(location).attr('href',data.url);}
else
{jQuery(".namo-loader").hide();$("#namoErrorMsg").html(data.message);}}});}});});