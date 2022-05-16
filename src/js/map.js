function initMap() {
  const myLating = new google.maps.LatLng(49.008985, 33.625355);
  const mapOpt = {
    zoom: 15,
    center: myLating,
    mapTypeId: "terrain",
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOpt);
  const image =
    "https://res.cloudinary.com/dzyxtuzp3/image/upload/v1652567626/map_r1dhqz.svg";
  new google.maps.Marker({
    position: myLating,
    map,
    icon: image,
  });
}

window.initMap = initMap;
