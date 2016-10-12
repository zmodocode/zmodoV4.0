/**
 * Created by jenniferma on 2016/7/14.
 */
 // common banner plugin     begin     2016.09.30         written by jennifer
var $j = jQuery.noConflict();
function Bannerloop(options){
    var defaultOptions={
        banner:'.banner',
        bars:'.dots',
        num:5,
        autoSpeed: 5000
    };
    this.options= $j.extend({},defaultOptions,options||{});
    this.init();

}
Bannerloop.prototype={
    init:function(){
        var _this=this;
        _this.length=$j(_this.options.banner+' li').length;
        _this.dots=$j(_this.options.bars);
        _this.index=0;
        _this.timer=null;
        if(_this.length-1>0){
            for(var i=0;i<_this.length;i++){
                _this.dots.append('<span></span>');
            }
        }
        _this.run();
        _this.auto();
        $j(_this.options.bars+' span,'+_this.options.banner+' li').mouseover(function(){
            clearInterval(_this.timer);
        }).mouseout(function(){
            _this.auto();
        });
        var docWidth=$j(document).width();
        if(docWidth-1000<0){
            $j(_this.options.bars+' span,'+_this.options.banner+' li').on('touchstart  click',function(){
                clearInterval(_this.timer);                
            })      
        }
        $j(_this.options.bars+' span').click(function(){
            _this.index=$j(this).index();
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
        $j(this.options.banner).css("transform","translate3d("+(this.index)*(-100)/(this.options.num)+'%'+",0,0)");
        //$j(this.banner+' li').eq(this.index).css("display","block").siblings().css("display","none");
        $j(this.options.bars+' span').eq(this.index).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
        $j(this.options.banner+' li').eq(this.index).addClass("swiper-slide-active").siblings().removeClass("swiper-slide-active");
        $j(this.options.banner+' li').eq(this.index-1).addClass("swiper-slide-prev").siblings().removeClass("swiper-slide-prev");
        $j(this.options.banner+' li').eq(this.index+1).addClass("swiper-slide-next").siblings().removeClass("swiper-slide-next");
    }
}
 // common banner plugin      end     2016.09.30         written by jennifer

 // common head  and  foot    begin     2016.09.30         written by jennifer
var screenWidth=$j(document).width();
           if(screenWidth-768>0){
            $j(".nav-products,.nav-link-product").mouseover(function(){
           $j(".nav-products").addClass("nav-products-show");
           });
          $j(".nav-products,.nav-link-product").mouseleave(function(){
          $j(".nav-products").removeClass("nav-products-show");
           });
          $j(".nav-link-search").click(function(){
                     if($j("#zmodo-nav").hasClass("searchshow")){
                     $j("#zmodo-nav").removeClass("searchshow");                    
        }else{
                     $j("#zmodo-nav").addClass("searchshow");
                     $j(".nav-searchform-input").focus();    
        }   
          });
          $j(".nav-searchview-close").click(function(){
                     $j("#zmodo-nav").removeClass("searchshow"); 
          });         
    $j(".footer-share-item07").mouseover(function(){
           $j(".footer-con .footer-share-item06 a").css("background-position","-167px -2px");
    }).mouseout(function(){
           $j(".footer-con .footer-share-item06 a").css("background-position","-167px -45px")
    });
     // common toggle animation  on the pc begin from    2016.10.12        written by jennifer 
    $j(".explore-btn").click(function () {
         $j(".explore-con").toggle();
         if ($j(".arrow-down-icon").hasClass("arrow-down")) {
             $j(".arrow-down-icon").removeClass("arrow-down");
         } else {
             $j(".arrow-down-icon").addClass("arrow-down");
         }
     })   
     // common toggle animation end  until    2016.10.12        written by jennifer 
           }
    if(screenWidth-768<=0){
    $j(".nav-menuicon-label").click(function(){
        if($j("#zmodo-nav").hasClass("nav-active")){
                     $j("#zmodo-nav").removeClass("nav-active").removeClass("searchshow"); 
        }else{
                     $j("#zmodo-nav").addClass("nav-active");    
        }    
        if($j(".nav-item-product").hasClass("nav-item-menu-show")){
                     $j(".nav-item-product").removeClass("nav-item-menu-show");
        }       
    });
    $j(".nav-search-placeholder").click(function(){
        if($j("#zmodo-nav").hasClass("nav-active")&&!$j(".nav-searchview").hasClass("searchshow")){
                     $j("#zmodo-nav").addClass("searchshow");
                     $j(".nav-searchform-input").focus();    
        }
         if($j(".nav-item-product").hasClass("nav-item-menu-show")){
                     $j(".nav-item-product").removeClass("nav-item-menu-show");
        }    
    });
    $j('.nav-link-product').parent().on("click",function(){
            if(!$j(this).hasClass("nav-item-menu-show")){
            $j(this).addClass("nav-item-menu-show");
            }else{
             $j(this).removeClass("nav-item-menu-show");
           }
           });

 // common toggle animation  on the phone begin from    2016.10.12        written by jennifer 
    $j(".explore-btn").click(function () {
         $j(".explore-con-phone").toggle();
         if ($j(".arrow-down-icon").hasClass("arrow-down")) {
             $j(".arrow-down-icon").removeClass("arrow-down");
         } else {
             $j(".arrow-down-icon").addClass("arrow-down");
         }
     })   
    // common toggle animation end until    2016.10.12        written by jennifer 
}
           $j(".nav-searchform-submit").click(function(e){
                     e.preventDefault();
                      if(!$j.trim($j(".searchshow .nav-searchform-input").val())){
                      $j(".searchshow .nav-searchform-input").focus();       
                      $j(".searchshow .nav-searchform-input").attr("placeholder","");
                      }else{
                        $j("#nav-search-form").submit();
                      }
          });
 // common head  and  foot  end    2016.09.30         written by jennifer      
