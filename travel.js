// Initialize and add the map
fart = new Fart({
  default_sound: farts.toot,
  loop: false,
  volume: 100
});


$(document).ready(function () {
  document.body.addEventListener("click", function () {
    fart.play();
  }, { once: false });
});


function initMap() {
  const montreal = { lat: 45.50601149849052, lng: -73.56423816445884 };
  const quebec = { lat: 46.8175818361284, lng: -71.17439726042728 };
  const vancouver = { lat: 49.28292478826721, lng: -123.12215850697119 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: montreal,
  });
  const marker1 = new google.maps.Marker({
    position: montreal,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: quebec,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: vancouver,
    map: map,
  });
}