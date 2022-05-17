var latitude = 13.028641818876078;
var longitude = 77.65504717856643;
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhdGhlZXJ0aCIsImEiOiJjbDMydG9oY3oxYWQwM3Bwc2Fsdno3c2UyIn0.WOShnHZ-CicyxQIjJbQzQQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [longitude, latitude],
  zoom: 8,
});
var img = document.querySelector("#taj-mahal")
var img1 = document.querySelector("#lotus-temple")
var img2 = document.querySelector("#humpi")
var img3 = document.querySelector("#golden-temple")

var marker1 = new mapboxgl.Marker({
    element:img
})

.setLngLat([78.0421,27.1751])
.addTo(map);

var marker2 = new mapboxgl.Marker({
  element:img1
})

.setLngLat([77.259132,28.553558])
.addTo(map);

var marker3 = new mapboxgl.Marker({
  element:img2
})

.setLngLat([76.4600,15.3350])
.addTo(map);

var marker4 = new mapboxgl.Marker({
  element:img3
})

.setLngLat([74.8765,31.6200])
.addTo(map);

map.addControl(
    new MapBoxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)