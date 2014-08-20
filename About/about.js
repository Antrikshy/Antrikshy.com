$(document).ready(function() {
    $("#about_me_text").append($("<p id=\"loading_msg\">Loading bio from about.me...<br /><br /></p>").fadeIn('fast').delay(2500));
    $("#about_website_text").hide();
    $("#about_website_header").hide();
    $("#photo1").hide();
    $("#photo2").hide();
    $("#photo3").hide();

    $.ajax({
        url: 'https://api.about.me/api/v2/json/user/view/AntrikshYadav?client_id=a9b1086266608d1a73afdb4144ef97fdc6b9db7e',
        type: 'GET',
        dataType: 'jsonp',
        success: function (data) {
            bio = "<p>" + data.bio + "</p>";
            bio = bio.replace(/\n/g, "</p><p>");

            $("#loading_msg").fadeOut('fast');
            $("#about_me_text").append($(bio).hide(0).fadeIn('slow'));
        }
    });

    window.onscroll = function fadeInContent() {
        var scrollTop = document.body.scrollTop;
        if (scrollTop > 700) {
            $("#about_website_header").fadeIn(400);
        }
        if (scrollTop > 900) {
            $("#about_website_text").fadeIn(400);
        }
        if (scrollTop > 1100) {
            $("#photo1").fadeIn('slow', function() {
                $("#photo2").fadeIn('slow', function() {
                    $("#photo3").fadeIn('slow');
                });
            });
        }
    }
});