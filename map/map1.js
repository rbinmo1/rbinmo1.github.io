var map1obj = L.map('map1id').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1obj)
var map1MarkerObject = L.marker([30, -90]).addTo(map1obj)
var map1PolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map1obj)
map1PolygonObject.bindPopup('Polygonpopuptext')
map1PolygonObject.bindPopup('Markerpopuptext')