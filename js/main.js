var map, myLat, myLong;
function initMap() {
     console.log("init map");

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 64.8377778, lng: -147.71638889999997},
       zoom: 11
     });
   }


$(document).ready(function(){


//submit button function, get's user input
$("#button").click(function(){
  var city=$("#cityName").val();
  alert(city);

//Google Json Request
  var url="https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyA5BlJo30YYd9DFQboFKdCX5iBn6GKPHyM";
  $.getJSON(url, function(json){
        console.log(json.results[0].geometry.location);
        var myLat = json.results[0].geometry.location.lat;
        var myLong = json.results[0].geometry.location.lng;

        console.log(myLat);
        console.log(myLong);


  console.log(city);
  console.log(json.results[0]);


  alert("outside of 1st request");
  console.log(json.results[0]);
  var myLat = json.results[0].geometry.location.lat;
  var myLong = json.results[0].geometry.location.lng;
//FourSquare API Request
var fourSquareUrl = "https://api.foursquare.com/v2/venues/search?intent=browse&near="+myLat+"&"+myLong+"&radius=19400&categoryId=4d4b7105d754a06374d81259&query=Coffee&client_id=ITCEQQH3TV4ARRVUCNLK1P4TW1XOM3S1RKIZVPHFY452HFQO&client_secret=SOHNSC0TT4XBM31HVZR4FT13M5JLUONTWWSXE3INES5Y3LUO&v=20130307";

$.getJSON(fourSquareUrl, function(data){
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name +'</br>'+venues.location.formattedAddress+ '</br>'+
            venues.url+ '</br>' + venues.contact.formattedPhone+ '</br>'+ "Checkins Counted= "+ venues.stats.checkinsCount+  '</p>';
            $(content).appendTo("#names");
            console.log(data.response);

            });
    });  });
}); });
