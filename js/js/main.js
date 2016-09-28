var map, myLat, myLong;


function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 64.8377778, lng: -147.71638889999997},
        zoom: 11
        }); }





$(document).ready(function(){

//submit button function, get's user input
$("#button").click(function(){
    var city=$("#cityName").val();
    //alert(city);

//Google Json Request
  var url="https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyA5BlJo30YYd9DFQboFKdCX5iBn6GKPHyM";
    $.getJSON(url, function(json){
      //  console.log(json.results[0].geometry.location);
        var myLat = json.results[0].geometry.location.lat;
        var myLong = json.results[0].geometry.location.lng;

//        console.log(myLat);
//        console.log(myLong)


        var userLocation = new google.maps.LatLng(myLat, myLong);
        var map = new google.maps.Map($('#map')[0], {
                  center: userLocation,
                  zoom: 12,


  });

 console.log(json.results[0]);
  var myLat = json.results[0].geometry.location.lat;
  var myLong = json.results[0].geometry.location.lng;



//FourSquare API Request
  var fourSquareUrl = "https://api.foursquare.com/v2/venues/search?intent=browse&near="+myLat+","+myLong+"&radius=5000&categoryId=4d4b7105d754a06374d81259&query=Coffee&client_id=ITCEQQH3TV4ARRVUCNLK1P4TW1XOM3S1RKIZVPHFY452HFQO&client_secret=SOHNSC0TT4XBM31HVZR4FT13M5JLUONTWWSXE3INES5Y3LUO&v=20130307";

$.getJSON(fourSquareUrl, function(data){

        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name +'</br>' + venues.contact.formattedPhone+ '</br>'+ "Checkins Counted= "+ venues.stats.checkinsCount+  '</p>';
            $("#namesUL").prepend($('<li>'+content+'</li>'));

          //  console.log(data.response);
   var coffeeName = data.response.venues[i].name;
   var coffeeShopCoords = data.response.venues[i].location;
   var shopUrl = data.response.venues[i].url;
   var shopAddress = data.response.venues[i].location.address;


for(var i = 0; i <= 50; i++) {
                    // var coffeeShopCoords = data.response.venues[i].location;
                  //   var coffeeName = data.response.venues[i].name;
                     var latLng = new google.maps.LatLng(coffeeShopCoords);
                     var marker = new google.maps.Marker({

                       position: latLng,
                  //     animation: google.maps.Animation.DROP,
                       map: map
                     });


                     var contentString= '<div class="coffeeshopName">'+coffeeName+'</div>' +
                      '</br>'+'<div class= "shopStreetAdd">'+shopAddress+'</div>'+'<div class="csURL">'+shopUrl+'</div>'

                     var infowindow = new google.maps.InfoWindow({
                         content: contentString,
					               position: latLng,


                     });


                      marker.addListener('mouseover', function()
                      {
                        infowindow.open(map, this);  });

                      marker.addListener('mouseout', function()
                      {
                        infowindow.close();   });

        console.log(data.response.venues[i]);
      }

            //coffeeShop= json.results[0].geometry.location;
            //console.log(coffeeShop);
            });
    });  });
}); });
