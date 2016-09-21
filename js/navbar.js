/**
 * Created by 周杨 on 2016/9/14.
 */
$(function(){
    var aLi=$(".nav>li");
    aLi.each(function ( index ){
        $(this).click(function (){
            aLi.removeAttr("class");
            $(this).addClass("active");
        });
    });
});


