/**
 * Created by jenniferma on 2016/7/14.
 */
 // common banner plugin     begin     2016.09.30         written by jennifer
function Bannerloop(options){
    var defaultOptions={
        banner:'.banner',
        bars:'.dots',
        num:5,
        autoSpeed: 5000
    };
    this.options= $.extend({},defaultOptions,options||{});
    this.init();

}
Bannerloop.prototype={
    init:function(){
        var _this=this;
        _this.length=$(_this.options.banner+' li').length;
        _this.dots=$(_this.options.bars);
        _this.index=0;
        _this.timer=null;
        if(_this.length-1>0){
            for(var i=0;i<_this.length;i++){
                _this.dots.append('<span></span>');
            }
        }
        _this.run();
        _this.auto();
        $(_this.options.bars+' span,'+_this.options.banner+' li').mouseover(function(){
            clearInterval(_this.timer);
        }).mouseout(function(){
            _this.auto();
        });
        var docWidth=$(document).width();
        if(docWidth-1000<0){
            $(_this.options.bars+' span,'+_this.options.banner+' li').on('touchstart  click',function(){
                clearInterval(_this.timer);                
            })      
        }
        $(_this.options.bars+' span').click(function(){
            _this.index=$(this).index();
            _this.run();
        });
    },
    auto:function(){
        var _this=this;
        this.timer=setInterval(function(){
            _this.index++;
            if(_this.index==_this.length){
                _this.index=0;
            };
            _this.run();

        },_this.options.autoSpeed)
    },
    run:function(){
        //banner变化的两种展现形式
        $(this.options.banner).css("transform","translate3d("+(this.index)*(-100)/(this.options.num)+'%'+",0,0)");
        //$(this.banner+' li').eq(this.index).css("display","block").siblings().css("display","none");
        $(this.options.bars+' span').eq(this.index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
        $(this.options.banner+' li').eq(this.index).addClass("swiper-slide-active").siblings().removeClass("swiper-slide-active");
        $(this.options.banner+' li').eq(this.index-1).addClass("swiper-slide-prev").siblings().removeClass("swiper-slide-prev");
        $(this.options.banner+' li').eq(this.index+1).addClass("swiper-slide-next").siblings().removeClass("swiper-slide-next");
    }
}
 // common banner plugin      end     2016.09.30         written by jennifer

 // common head  and  foot    begin     2016.09.30         written by jennifer
var screenWidth=$(document).width();
           if(screenWidth-768>0){
          $(".nav-link-search").click(function(){
                     if($("#zmodo-nav").hasClass("searchshow")){
                     $("#zmodo-nav").removeClass("searchshow");                    
        }else{
                     $("#zmodo-nav").addClass("searchshow");
                     $(".nav-searchform-input").focus();    
        }   
          });
          $(".nav-searchview-close").click(function(){
                     $("#zmodo-nav").removeClass("searchshow"); 
          });         
    $(".footer-share-item07").mouseover(function(){
           $(".footer-con .footer-share-item06 a").css("background-position","-167px -2px");
    }).mouseout(function(){
           $(".footer-con .footer-share-item06 a").css("background-position","-167px -45px")
    });
           }
    if(screenWidth-768<=0){
    $(".nav-menuicon-label").click(function(){
        if($("#zmodo-nav").hasClass("nav-active")){
                     $("#zmodo-nav").removeClass("nav-active").removeClass("searchshow"); 
        }else{
                     $("#zmodo-nav").addClass("nav-active");    
        }           
    });
    $(".nav-search-placeholder").click(function(){
        if($("#zmodo-nav").hasClass("nav-active")&&!$(".nav-searchview").hasClass("searchshow")){
                     $("#zmodo-nav").addClass("searchshow");
                     $(".nav-searchform-input").focus();    
        }
    })  
}
           $(".nav-searchform-submit").click(function(e){
                     e.preventDefault();
                      if(!$.trim($(".searchshow .nav-searchform-input").val())){
                      $(".searchshow .nav-searchform-input").focus();       
                      $(".searchshow .nav-searchform-input").attr("placeholder","");
                      }else{
                        $("#nav-search-form").submit();
                      }
          });
 // common head  and  foot  end    2016.09.30         written by jennifer           