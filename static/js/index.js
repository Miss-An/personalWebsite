$(function(){
    //开始
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollTop>=500)
        $("#to_top").css("display","block");
        else
        $("#to_top").css("display","none");
        //点击跳回顶部
        // $("#to_top").onclick=function(e){
        //     e.preventDefault();
        //     window.scrollTo(0,0);
        // }
    });
    $("#to_top").on("click","img",function(e){
        e.preventDefault();
        window.scrollTo(0,0);
    });
    //跳至注册块
    $(".start").on("click",function(){
        $("html").animate({
            scrollTop:$("#register").offset().top
        },500);  
    })
    //个人信息轮播
    function profile_slide(){
        var $imgShow=$(".profile_slider>img.show");
        $imgShow.removeClass("show")
        if($imgShow.next().length!=0)
            $imgShow.next().addClass("show");
        else
            $imgShow.parent().children().first().addClass("show");
    }
    var profile_slider_timer=setInterval(profile_slide,1000);
    $(".profile_slider>img").on("mouseover",function(){
        clearInterval(profile_slider_timer);
        profile_slider_timer=null;
    })
    $(".profile_slider>img").on("mouseout",function(){
        profile_slider_timer=setInterval(profile_slide,1000);

    })
})
//点赞
$(".profile_like").on("click",function(){
    var node=$(this);
    updateProfile(node);
})