$(document).ready(function(){
    let nav = $("#navbarContent");
    $(".navbar a").click(function() {
          
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top - $("#header").height()
        }, 700);
        nav.removeClass("show");

    });

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=<12524098855>&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});