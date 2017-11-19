$(function(){
    var index=0;
    for(var i=0;i<6;i++){
        $('.nav-tittle').eq(i).css('background','url("img/header.png") no-repeat 0 '+(i*(-85)+(-170))+'px');
    }
    $('.nav-fanli').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -170px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -170px');
    });
    $('.nav-shanglv').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -255px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -255px');
    });
    $('.nav-jifen').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -340px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -340px');
    });
    $('.liaojie').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -425px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -425px');
    });
    $('.nav-caibei').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -510px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -510px');
    });
    $('.nav-geren').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -108px -595px');
    },function(){
        $(this).css('background','url("img/header.png") no-repeat 0 -595px');
    });

    $('.nav-zhuan').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -40px -680px').stop().animate({'width':'71px'},100)
    },function(){
        $(this).css({'background':'url("img/header.png") no-repeat 0 -680px','width':'38px'});
    });
    $('.nav-hua').hover(function(){
        $(this).css('background','url("img/header.png") no-repeat -149px -680px').stop().animate({'width':'71px'},100)
    },function(){
        $(this).css({'background':'url("img/header.png") no-repeat -109px -680px','width':'38px'});
    });

    for(var i=0;i<$('.nav-bar-zhuanfa>li').length;i++){
        $('.nav-bar-zhuanfa>li').eq(i).css('background',' url("img/iconsB.png") no-repeat '+(-i*24)+'px -20px')
    }
    $('.nav-bar-zhuanfa>li').hover(function(){
        index=$(this).index();
        console.log(index);
        $(this).stop().animate({'background-position-Y':'-45px','background-position-X':(-index*25)+'px'},100);
    },function(){
        index=$(this).index();
        $(this).stop().animate({'background-position-Y':'-20px','background-position-X':(-index*25)+'px'},100);
    });

    //mainÂÖ²¥Í¼
    var timer=null;
    $('.main-show-bar>li').eq(0).css({'line-height':'35px','margin-top':'-5px','background-color':'#D03800'}).siblings().css({'line-height':'30px','margin-top':'0','background-color':'rgba(51, 51, 51, .5)'});
    timer=setInterval(function(){
        index++;
        index=index>$('.main-shower>li').length-1?0:index;
        $('.main-shower').stop().animate({'left':(-index*666)+'px'},500);
        $('.main-show-bar>li').eq(index).stop().css({'background-color':'#D03800','line-height':'35px'}).animate({'margin-top':'-5px'},500).siblings().stop().css({'background-color':'rgba(51, 51, 51, .5)','line-height':'30px'}).animate({'margin-top':'0'},500);
    },2000);
    $('.main-show').on({
        mouseenter:function(){
            clearInterval(timer);
        },mouseleave:function(){
            timer=setInterval(function(){
                index++;
                index=index>$('.main-shower>li').length-1?0:index;
                $('.main-shower').stop().animate({'left':(-index*666)+'px'},500);
                $('.main-show-bar>li').eq(index).stop().css({'background-color':'#D03800','line-height':'35px'}).animate({'margin-top':'-5px'},500).siblings().stop().css({'background-color':'rgba(51, 51, 51, .5)','line-height':'30px'}).animate({'margin-top':'0'},500);
            },2000);
        }
    });
    $('.main-show-bar>li').hover(
        function(){
            clearInterval(timer);
            index=$(this).index();
            $('.main-shower').stop().animate({'left':(-index*666)+'px'},500);
            $(this).stop().css({'background-color':'#D03800','line-height':'35px'}).animate({'margin-top':'-5px'},500).siblings().stop().css({'background-color':'rgba(51, 51, 51, .5)','line-height':'30px'}).animate({'margin-top':'0'},500);
        },function(){
            $(this).stop().css({'background-color':'rgba(51, 51, 51, .5)','line-height':'30px'}).animate({'margin-top':'0'},500);
        }
    );

    //mainÓÒ±ßËÑË÷À¸
    var num=0;
    var a=0;
    var b=0;
    $('.search-er').on('click',function(){
        num++;
        if(num==1){
            a=$(this).index();
            $(this).css('border-bottom','none');
            $(this).children('ul').css({'display':'block'});
            $(this).siblings().css('border-bottom','1px solid #e6e6e6').children('ul').css('display','none');
        }if(num==2){
            b=$(this).index();
            if(b!=a){
                num=1;
                $(this).css('border-bottom','none');
                $(this).children('ul').css({'display':'block'});
                $(this).siblings().css('border-bottom','1px solid #e6e6e6').children('ul').css('display','none');
            }else{
                num=0;
                $(this).css('border-bottom','1px solid #e6e6e6');
                $(this).children('ul').css('display','none');
            }
        }
    });


    $('.search-content').on({
        mouseenter:function(){
            $('.search-contenter').css('width','163px').stop().animate({'height':'140px'},300,function(){
                $('.search-contenter').css('overflow','visible');
            });
        },mouseleave:function(){
            $('.search-contenter').css('width','163px').stop().animate({'height':'0'},300,function(){
                $('.search-contenter').css('overflow','hidden');
            });
            $('.search-fenlei').css({display:'none'});
            $('.search-er').css({borderBottom:'1px solid #e6e6e6'});
            num=0;
        }
    });

});
