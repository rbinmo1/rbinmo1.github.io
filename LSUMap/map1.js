var LSUmap = L.map('LSUid').setView([30.405953, -91.183262], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(LSUmap)
var point = L.marker([30.412, -91.177]).addTo(LSUmap)
var area = L.polygon([
  [30.395095, -91.205187],
  [30.418413, -91.194114],
  [30.4419301, -91.172142],
  [30.403979, -91.175833],
  [30.389838, -91.191025]
]).addTo(LSUmap)
var line = L.polyline([
  [30.396681, -91.178379],
  [30.407778, -91.186463],
  [30.412615, -91.188693],
  [30.419462, -91.189229]
]).addTo(LSUmap)
area.bindPopup('LSU')
line.bindPopup('Railline')
point.bindPopup('LSU Student Union')
