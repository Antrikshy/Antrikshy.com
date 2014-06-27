$(document).ready(function() {
    jQuery.support.cors = true;

    var aboutmeJSONReturn;
    var aboutmeJSONUrl = "https://api.about.me/api/v2/json/user/view/AntrikshYadav?apikey=a9b1086266608d1a73afdb4144ef97fdc6b9db7e";
    var bio = "";
    
    $.getJSON(aboutmeJSONUrl, function(aboutmeJSONReturn) {
        bio = "<p>" + aboutmeJSONReturn.bio + "</p>";
        $("#about_header").after($(bio).hide().fadeIn('slow'));
    });
});