$(document).ready(function() {
    // var aboutmeJSONReturn;
    // var aboutmeJSONUrl = "https://api.about.me/api/v2/json/user/view/AntrikshYadav?apikey=a9b1086266608d1a73afdb4144ef97fdc6b9db7e";
    // var bio = "";
    
    // $.getJSON(aboutmeJSONUrl, function(aboutmeJSONReturn) {
    //     bio = "<p>" + aboutmeJSONReturn.bio + "</p>";
    //     console.log(bio);
    //     $("#about_header").after($(bio).hide().fadeIn('slow'));
    // });

    $.ajax({
        url: 'https://api.about.me/api/v2/json/user/view/AntrikshYadav?client_id=a9b1086266608d1a73afdb4144ef97fdc6b9db7e',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            bio = "<p>" + data.bio + "</p>";
            $("#about_header").after($(bio).hide().fadeIn('slow'));
        }
    });
});