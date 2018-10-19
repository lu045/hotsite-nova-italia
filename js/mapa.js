//Mapa de localização da empresa que esta na pagina de contatos
function initMap() {
  var uluru = {lat: -22.7390827, lng: -46.8640138};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });}