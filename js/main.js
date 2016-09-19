/*

2) call jason
3) parse json
*/

alert("linked");
$(document).ready(function(){
$.getJSON('https://api.foursquare.com/v2/venues/search?intent=browse&near=51.1506269,14.968706999999995&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Restaurant&client_id=ITCEQQH3TV4ARRVUCNLK1P4TW1XOM3S1RKIZVPHFY452HFQO&client_secret=SOHNSC0TT4XBM31HVZR4FT13M5JLUONTWWSXE3INES5Y3LUO&v=20130307',
    function(data) {
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name + '</p>';
            $(content).appendTo("#names");
       });
});
});

alert("yep");
