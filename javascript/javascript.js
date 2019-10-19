$(document).ready(function() {

    var topics = ["Vampire", "Werewolf", "Chupacabra", "Bigfoot", "Banshee", "Zombie","Jason Voorhees", "Freddy Krueger", "Candyman", "Michael Myers", "Chucky", "Godzilla", "King Kong", "Ghostface"];
    console.log(topics);
    renderButtons();

     //shows the data
     function renderButtons() {
        $("#buttons-list").empty();

        for (var i = 0; i < topics.length; i++) {
                var  x = $("<button>");
                x.addClass("monster");
                x.attr("data-name", topics[i]);
                x.text(topics[i]);
                $("#buttons-list").append(x);
                console.log(topics[i]);
        }
    }

    //add monsters to list via button click
    $("#add-monster").on("click", function(event){
        event.preventDefault();
        var monster = $("#monster-input").val().trim();
       
        topics.push(monster);

        renderButtons();
        $(".monster").on("click", riseFromYourGrave);
    });

$(".monster").on("click", riseFromYourGrave);

function riseFromYourGrave() {
    $("#monsters-group").empty();
    var monster = $(this).attr("data-name");
    console.log(monster);
    var APIkey = "og23w3l5tpgYMZ8qUuUFrPtAfkum6FGN";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + monster + "&api_key=" + APIkey + "&limit=10";
    
    
    //AJAX call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var results = response.data;
        for (var i = 0; i <results.length; i++){
        var imageURL = results[i].images.fixed_height.url;
        var monsterImage = $("<img>");

        monsterImage.attr("src", imageURL);
        monsterImage.attr("alt", "monster image");

        $("#monsters-group").append(monsterImage);
        }
    });
   
}
});