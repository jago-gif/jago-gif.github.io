// inicia el mapa
function initMap() {
    // agrega las coordenadas 
    const uluru = { lat: -38.24548261876771, lng: -72.66479063103117 };
    // rescatar el mapa y agrega del zoom 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // crea el mapa
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }