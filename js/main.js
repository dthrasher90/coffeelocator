var map;
function initMap() {
     console.log("init map");

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 64.8377778, lng: -147.71638889999997},
       zoom: 11
     });
   }



  /* function getCityName(){
     var city=$("#cityName").val();
     console.log(city);
     return;
   } */

$(document).ready(function(){
  var city;

$("#button").click(function(){
  var city=$("#cityName").val();
  console.log(city);
    alert(city);


var url="https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyA5BlJo30YYd9DFQboFKdCX5iBn6GKPHyM";

$.getJSON(url, function(json){
      console.log(json.results[0].geometry.location);
      var myLat = json.results[0].geometry.location.lat;
      var myLong = json.results[0].geometry.location.lng;

      console.log(myLat);
      console.log(myLong);
});
});

/*$.getJSON('https://api.foursquare.com/v2/venues/search?intent=browse&near=64.8377778,-147.71638889999997&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Coffee&client_id=ITCEQQH3TV4ARRVUCNLK1P4TW1XOM3S1RKIZVPHFY452HFQO&client_secret=SOHNSC0TT4XBM31HVZR4FT13M5JLUONTWWSXE3INES5Y3LUO&v=20130307',
    function(data) {
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name +'</br>'+venues.location.formattedAddress+ '</br>'+
            venues.url+ '</br>' + venues.contact.formattedPhone+ '</br>'+ "Checkins Counted= "+ venues.stats.checkinsCount+  '</p>';
            $(content).appendTo("#names");
            console.log(data.response);
       }); });*/
});
