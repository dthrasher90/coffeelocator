
var map;

   function initMap() {
     console.log("init map");
    var map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 64.8377778, lng: -147.71638889999997},
       zoom: 11
     });
   }

   function getCityName(){
     var city=$("#cityName").val();
     console.log(city);
     return;

   }



$(document).ready(function(){

$("button").click(function(){
  //var cityData = getCityName();
    alert("worked");
  //  console.log(city);
});

$.getJSON('https://api.foursquare.com/v2/venues/search?intent=browse&near=64.8377778,-147.71638889999997&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Coffee&client_id=ITCEQQH3TV4ARRVUCNLK1P4TW1XOM3S1RKIZVPHFY452HFQO&client_secret=SOHNSC0TT4XBM31HVZR4FT13M5JLUONTWWSXE3INES5Y3LUO&v=20130307',
    function(data) {
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name +'</br>'+venues.location.formattedAddress+ '</br>'+
            venues.url+ '</br>' + venues.contact.formattedPhone+ '</br>'+ "Checkins Counted= "+ venues.stats.checkinsCount+  '</p>';
            $(content).appendTo("#names");
            console.log(data.response);
       }); });



});
