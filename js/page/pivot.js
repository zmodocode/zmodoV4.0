 var $j=jQuery.noConflict();
 $j(function() {
     var screenWidth = $j(document).width();
     if (screenWidth - 768 > 0) {
// the animation of the first screen on the pc   begin   from   2016.10.09    written by jennifer	
         $j(".watch-video").mouseover(function () {
             $j(".watch-video-icon").addClass("wvi-active");
         });
         $j(".watch-video").mouseleave(function () {
             $j(".watch-video-icon").removeClass("wvi-active");
         });
         function playUrl(url) {
             var iframe = '<iframe height="480" width="853" src="' + url + '" frameborder=0 allowfullscreen="true"  scrolling=no allowtransparency></iframe>'
             if (url != "") {
                 art.dialog({
                     id: 'playVido',
                     width: 853,
                     height: 480,
                     padding: 0,
                     title: ' ',
                     content: iframe,
                     lock: true
                 });
             }
         };
         $j(".watch-video").click(function () {
             var url = "https://www.youtube.com/embed/0rVfVW79rVg?rel=0&showinfo=0&autoplay=1&loop=1&playlist=0rVfVW79rVg";
             playUrl(url);
         });
// the animation of the first screen on the pc  end  until  2016.10.09  written by jennifer
// the animation of the sixth screen on the pc  begin  from  2016.10.09  written by jennifer
         $j(".pivot-tip-btn").click(function () {
             if ($j(this).html() == "+") {
                 $j(this).html("-");
                 $j(this).parent().siblings().find(".pivot-tip-btn").html("+");
             } else {
                 $j(this).html("+");
             }
         })
         $j(".pivot-tip-btn01").click(function () {
             $j(this).removeClass("pivot-tip-btn-animation");
             $j(".pivot-tips-text").html("Pivot gives you accurate humidity readings so that you can always know <br> your home's health.").css({
                 "color": "#14b8e2",
                 "opacity": "1"
             });
         });
         $j(".pivot-tip-btn02").click(function () {
             $j(this).removeClass("pivot-tip-btn-animation");
             $j(".pivot-tips-text").html("Pivot measures the temperature of the room and can be switched easily <br> from °F to °C in the app.").css({
                 "color": "#ffa737",
                 "opacity": "1"
             });
         });
// the animation of the sixth screen on the pc  end until  2016.10.09  written by jennifer
// the animation of the fourth screen on the pc  begin from 2016.10.11  written by jennifer
         // the  animation on  the PC
         var sc = 1;
         var setval = 0;
         var intval = 0;
         var frame = 0;
         var pivotAni04 = function () {
             if (setval) {
                 clearTimeout(setval);
             }
             if (intval) {
                 frame = 0;
                 clearInterval(intval);
             }
             mtime = 500;
             $j('.pivot-part04-mc').stop();
             $j('.pivot-part04-stage').empty();
             $j('.pivot-part04-tit').stop().removeAttr('style').hide();
             $j('.pivot-part04-product').stop();
             if ($j('.pivot-part04-product').length != 1 || $j('.pivot-part04-product').hasClass('pivot-part04-slant')) {
                 $j('.pivot-part04-product').fadeOut(300, function () {
                     $j('.pivot-part04-product').remove();
                     $j('.pivot-part04-pivot').append('<span class="pivot-part04-product"></span>');
                 });
             }
             if (1 == sc) {
                 $j('.pivot-part04-tit p:eq(0)').text('What can the Pivot do?');
                 $j('.pivot-part04-tit p:eq(1)').text('');
                 $j('.pivot-part04-tit').fadeIn(2000);
             } else if (2 == sc) {
                 $j('.pivot-part04-tit p:eq(0)').text('Embedded with sensors around its circumference.');
                 $j('.pivot-part04-tit p:eq(1)').text('Pivot can swivel 360° when significant motion is detected and send you a video alert of its sweep of the room.');
                 $j('.pivot-part04-tit').transition({x: '100rem', display: 'block'}).transition({x: '0rem'}, 2000);
                 intval = setInterval(function () {
                     var end = false;
                     if (frame >= _aniseq.length) {
                         end = true;
                     }
                     $j('.pivot-part04-shadow').after('<span class="pivot-part04-product" style="background-position:0 ' + (frame < _aniseq.length ? _aniseq[frame] : '0') + 'rem"></span>');
                     $j('.pivot-part04-product:eq(1)').fadeOut(500, function () {
                         $j(this).remove();
                     });
                     if (frame < _aniseq.length) {
                         ++frame;
                     }
                     if (end) {
                         clearInterval(intval);
                     }
                 }, 200);
             } else if (3 == sc) {
                 $j('.pivot-part04-tit p:eq(0)').text('With temperature and humidity sensors.');
                 $j('.pivot-part04-tit p:eq(1)').text('The Pivot gets the whole picture of your home\'s health.');
                 $j('.pivot-part04-tit').transition({x: '-100rem', display: 'block'}).transition({x: '0rem'}, 2000);

                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc03a"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc03b"></span>');
                 $j('.pivot-part04-mc03a').transition({display: 'block', scaleX: 0}).animate({
                     opacity: 1,
                     scaleX: 1
                 }, 1000);
                 $j('.pivot-part04-mc03b').transition({display: 'block'}, 1500).animate({opacity: 1}, 1000);
             } else if (4 == sc) {
                 $j('.pivot-part04-shadow').after('<span class="pivot-part04-product pivot-part04-slant"></span>');
                 $j('.pivot-part04-product:eq(1)').fadeOut(200, function () {
                     $j(this).remove();
                 });
                 $j('.pivot-part04-tit p:eq(0)').text('The Pivot\'s two-way audio allows you to easily communicate with loved ones.');
                 $j('.pivot-part04-tit p:eq(1)').text('And with a built-in bluetooth speaker, this smart home hub takes center stage.');
                 $j('.pivot-part04-tit').transition({y: '-50rem', display: 'block'}).transition({y: '0rem'}, 2000);

                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc04a"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc04b"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc04c"></span>');

                 $j('.pivot-part04-mc04a').transition({display: 'block', rotate: '20deg'}).transition({
                     opacity: 1,
                     scale: [1.5, 0.5]
                 }, 500).transition({y: '-2rem', scale: [0.8, 1.5]}, 500).transition({
                     y: '-0.5rem',
                     scale: [0.9, 1.2]
                 }, 200, 'linear').transition({y: 0, scale: [1.5, 0.5]}, 500).transition({
                     y: '-2rem',
                     scale: [0.8, 1.5]
                 }, 500).transition({y: '-0.5rem', scale: [0.9, 1.2]}, 200, 'linear').transition({
                     y: 0,
                     scale: [1.5, 0.5]
                 }, 500).transition({y: '-2rem', scale: [0.8, 1.5]}, 500).transition({
                     y: '-0.5rem',
                     scale: [0.9, 1.2]
                 }, 200, 'linear').transition({y: 0, scale: [1.5, 0.5]}, 500).transition({scale: 1}, 500);
                 $j('.pivot-part04-mc04b').transition({display: 'block'}, 1000).transition({
                     opacity: 1,
                     rotate: '10deg'
                 }, 200).transition({rotate: '-10deg'}, 300).transition({rotate: '15deg'}, 400).transition({rotate: '-20deg'}, 500).transition({rotate: '20deg'}, 500).transition({rotate: '-20deg'}, 500).transition({rotate: '20deg'}, 500).transition({rotate: '-20deg'}, 500).transition({rotate: '15deg'}, 300).transition({rotate: '-10deg'}, 200);
                 $j('.pivot-part04-mc04c').transition({display: 'block'}, 2000).transition({
                     opacity: 1,
                     scale: [1.5, 0.5]
                 }, 500).transition({y: '-2rem', scale: [0.8, 1.5]}, 500).transition({
                     y: '-0.5rem',
                     scale: [0.9, 1.2]
                 }, 200, 'linear').transition({y: 0, scale: [1.5, 0.5]}, 500).transition({
                     y: '-2rem',
                     scale: [0.8, 1.5]
                 }, 500).transition({y: '-0.5rem', scale: [0.9, 1.2]}, 200, 'linear').transition({
                     y: 0,
                     scale: [1.5, 0.5]
                 }, 500).transition({y: '-2rem', scale: [0.8, 1.5]}, 500).transition({
                     y: '-0.5rem',
                     scale: [0.9, 1.2]
                 }, 200, 'linear').transition({y: 0, scale: [1.5, 0.5]}, 500).transition({scale: 1}, 500);
             } else if (5 == sc) {
                 $j('.pivot-part04-tit p:eq(0)').text('The Pivot acts not only as a standalone smart device.');
                 $j('.pivot-part04-tit p:eq(1)').text('But also as a hub for connecting other smart devices, such as door and window sensors.');
                 $j('.pivot-part04-tit').transition({x: '100rem', display: 'block'}).transition({x: '0rem'}, 2000);

                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc05a"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc05b"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc05c"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc05d"></span>');

                 $j('.pivot-part04-mc05a').fadeIn(1000);
                 $j('.pivot-part04-mc05b').animate({display: 'none'}, 1000).fadeIn(500);
                 $j('.pivot-part04-mc05c').animate({display: 'none'}, 1500).fadeIn(500);
                 $j('.pivot-part04-mc05d').animate({display: 'none'}, 2000).fadeIn(500);
             } else if (6 == sc) {
                 $j('.pivot-part04-tit p:eq(0)').text('Record video footage to internal memory or the Cloud.');
                 $j('.pivot-part04-tit p:eq(1)').text('Create clips and share them easily with the Cloud controls.');
                 $j('.pivot-part04-tit').fadeIn(2000);

                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06a"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06b"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06c"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06d"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06e"></span>');
                 $j('.pivot-part04-stage').append('<span class="pivot-part04-mc pivot-part04-mc06f"></span>');

                 $j('.pivot-part04-mc06a').fadeIn(1000);
                 $j('.pivot-part04-mc06b').animate({display: 'none'}, 1000).fadeIn(500);
                 $j('.pivot-part04-mc06c').animate({display: 'none'}, 1500).fadeIn(500);
                 $j('.pivot-part04-mc06d').animate({display: 'none'}, 2000).fadeIn(500);
                 $j('.pivot-part04-mc06e').animate({display: 'none'}, 2500).fadeIn(500);
                 $j('.pivot-part04-mc06f').animate({display: 'none'}, 3000).fadeIn(500);
             }

             if (sc < 6) {
                 ++sc;
             } else {
                 sc = 1;
             }
             setval = setTimeout(pivotAni04, 10000);             
         }
         $j('.pivot-part04-arrow').click(function () {
                 if ($j(this).hasClass('pivot-part04-left')) {
                     sc -= 2;
                 }
                 if (0 == sc) {
                     sc = 6;
                 }
                 if (-1 == sc) {
                     sc = 5;
                 }
                 if (7 == sc) {
                     sc = 1;
                 }
                 pivotAni04();
             })
         pivotAni04();
         // the animation of the fourth screen on the pc  end until 2016.10.11  written by jennifer
     
     } else {
// the animation of the first screen on the phone  begin  from  2016.10.09  written by jennifer	 	
         var tag = document.createElement('script');
         var videoWidth = $j(window).width() + "px";
         var videoHeight = $j(window).height() + "px";
         var firstScriptTag = document.getElementsByTagName('script')[0];
         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
         var player;
         function onYouTubeIframeAPIReady() {
             player = new YT.Player('player', {
                 videoId: '0rVfVW79rVg',
                 events: {
                     'onReady': onPlayerReady,
                 }
             });
         }
         function onPlayerReady(event) {
             event.target.playVideo();
         }
         var done = false;
         function stopVideo() {
             player.stopVideo();
         }
         $j(".watch-video").click(function () {
             $j("#player").css({"display": "block", "width": videoWidth, "height": videoHeight});
             tag.src = "https://www.youtube.com/iframe_api";
             $j(this).css({"display": "none"});
             $j(".video-close-phone").css({"display": "block"});
             player.playVideo();
         });
         $j(".video-close-phone").click(function () {
             $j("#player").fadeOut(500);
             $j(this).css({"display": "none"});
             $j(".watch-video").css({"display": "block"});
             player.stopVideo();
         });
         // the animation of the first screen on the phone end until 2016.10.09  written by jennifer
// the animation of the second screen on the phone begin from 2016.10.09  written by jennifer
         var mySwiperpress = new Swiper('.pivot-part02 .swiper-container', {
             pagination: '.pivot-part02 .swiper-pagination',
             grabCursor: true,
             paginationClickable: true,
             paginationType: 'bullets'
         });
// the animation of the second screen on the phone end until 2016.10.09  written by jennifer	  
$j(".explore-btn").click(function(){
         $j(".explore-con").toggle();
         if($j(".arrow-down-icon").hasClass("arrow-down")){
             $j(".arrow-down-icon").removeClass("arrow-down");
         }else{
             $j(".arrow-down-icon").addClass("arrow-down");
         }
     })      
     }
     // the animation of the third screen on the pc  begin from 2016.10.09  written by jennifer
     function pivotAni03() {
         for (var i = 0; i < 3; i++) {
             (function (i) {
                 setTimeout(function () {
                     $j(".pivot-part03 .pivot-advantage").find(".pivot-advantage-item").eq(i).fadeIn();
                 }, i * 200)
             })(i)
         }
     }
     $j(document).scroll(function () {
         if ($j(document).scrollTop() - $j(".pivot-part02").offset().top > 0) {
             pivotAni03();
         }
     })
// the animation of the third screen on the pc  end  until  2016.10.09  written by jennifer	
// the animation of the fifth screen on the pc  begin from 2016.10.09  written by jennifer
     var _aniseq = [0, -20, -40, -60, -80, -100, -120, -140, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -160, -120, -100, -80, -60, -40, -20, 0];
     var _aniseq1 = [-280, -260, -240, -220, -200, -180, -160, -140, -160, -160, -140, -140, -160, -160, -140, -140, -160, -160, -140, -140, -120, -100, -80, -60, -40, -20, 0];
     var _aniseq2 = [-20, -40, -60, -80, -100, -120, -140, -140, -160, -160, -140, -140, -160, -160, -180];
     var _pivotAni05 = 0;
     $j('.pivot-rotate-btn-left').click(function () {
         var video = document.getElementById('pivot-video');
         video.pause();
         video.style.display = 'none';
         var frame = 0;
         if (_pivotAni05) {
             clearInterval(_pivotAni05);
             $j('.pivot-360rotate').remove();
             $j('.pivot-360rotate-box').append('<div class="pivot-360rotate"></div>');
         }
         _pivotAni05 = setInterval(function () {
             $j('.pivot-shadow').after('<div class="pivot-360rotate" style="background-position:0 ' + _aniseq1[frame] + 'rem"></div>');
             $j('.pivot-360rotate:eq(1)').fadeOut(350, function () {
                 $j(this).remove();
             });
             if (frame < _aniseq.length) {
                 ++frame;
             } else {
                 clearInterval(_pivotAni05);
             }
         }, 350);
         $j('.pivot-360bg').stop().css({backgroundPosition: '0 0'}).animate({backgroundPositionX: '-4850px'}, 10000, 'linear');
     });
     $j('.pivot-rotate-btn-right').click(function () {
         $j('.pivot-360bg').stop();
         var video = document.getElementById('pivot-video');
         video.style.display = 'block';
         video.play();
         var frame = 0;
         if (_pivotAni05) {
             clearInterval(_pivotAni05);
             $j('.pivot-360rotate').remove();
             $j('.pivot-360rotate-box').append('<div class="pivot-360rotate"></div>');
         }
         _pivotAni05 = setInterval(function () {
             $j('.pivot-shadow').after('<div class="pivot-360rotate" style="background-position:0 ' + _aniseq[frame] + 'rem"></div>');
             $j('.pivot-360rotate:eq(1)').fadeOut(500, function () {
                 $j(this).remove();
             });
             if (frame < _aniseq.length - 1) {
                 ++frame;
             } else {
                 clearInterval(_pivotAni05);
             }
             ;
         }, 150);
     });
// the animation of the fifth screen on the pc  end until 2016.10.09  written by jennifer
// the animation of the seventh screen on the pc  begin from 2016.10.09  written by jennifer
     var pivot07Video = document.getElementById('videoPart07');
     $j(".pivot-part07-btn01").click(function () {
         pivot07Video.src = 'http://www.zmodo.com/skin/frontend/default/zmodo_v3/res/aw06/video1.mp4'
         pivot07Video.play();
     });
     $j(".pivot-part07-btn02").click(function () {
         pivot07Video.src = 'http://www.zmodo.com/skin/frontend/default/zmodo_v3/res/aw06/video2.mp4'
         pivot07Video.play();
     });
     $j(".pivot-part07-btn01,.pivot-part07-btn02").click(function () {
         if ($j(this).hasClass("pivot-part07-active")) {
         } else {
             $j(this).addClass("pivot-part07-active").parent().siblings().find("a").removeClass("pivot-part07-active");
         }
     });
     $j(".pivot-rotate-btn").click(function () {
         if ($j(this).hasClass("pivot-part05-active")) {
         } else {
             $j(this).addClass("pivot-part05-active").siblings(".pivot-rotate-btn").removeClass("pivot-part05-active");
         }
     });
// the animation of the seventh screen on the pc  end  until  2016.10.09  written by jennifer
// the animation of the tenth screen on the pc  begin from  2016.10.09  written by jennifer
     var pivot10Video = document.getElementById('videoPart10');
     $j(".pivot-part10-btn01").click(function () {
         pivot10Video.src = 'http://www.zmodo.com/skin/frontend/default/zmodo_v3/res/aw08/video1.mp4'
         pivot10Video.play();
     })
     $j(".pivot-part10-btn02").click(function () {
         pivot10Video.src = 'http://www.zmodo.com/skin/frontend/default/zmodo_v3/res/aw08/video2.mp4'
         pivot10Video.play();
     })
     $j(".pivot-part10-btn03").click(function () {
         pivot10Video.src = 'http://www.zmodo.com/skin/frontend/default/zmodo_v3/res/aw08/video3.mp4'
         pivot10Video.play();
     })
// the animation of the tenth screen on the pc  end  until  2016.10.09  written by jennifer
// the animation of the twelfth screen on the pc  begin from  2016.10.09  written by jennifer
     
 })
 // the animation of the twelfth screen on the pc  end  until  2016.10.09  written by jennifer
 // the animation of the fourth screen<1024  begin from  2016.10.09  written by jennifer
 var mySwiperpart04 = new Swiper('.pivot-part04 .swiper-container', {
             pagination: '.pivot-part04 .swiper-pagination',
             grabCursor: true,
             paginationClickable: true,
             paginationType: 'bullets'
         });
  // the animation of the fourth screen<1024   end  until  2016.10.09  written by jennifer
   // the animation of the twelfth screen on the pc  begin from 2016.10.11  written by jennifer
         $j('.pivot-part12-table .tab').click(function() {
            $j('.bit-detail').slideToggle();    
            var tabTxt=$j('.tab').text();
            if(tabTxt==='-'){
            $j('.pivot-part12-table .tab').text('+');   
            }else if(tabTxt==='+'){
            $j('.pivot-part12-table .tab').text('-');   
            }   
            });
         // the animation of the twelfth screen on the pc  end until 2016.10.11  written by jennifer