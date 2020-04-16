var LSUmap = L.map('LSUid').setView([30.405953, -91.183262], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(LSUmap)
var marker = L.marker([30.412, -91.177]).addTo(LSUmap)
var polygon = L.polygon([
  [30.395, -91.204],
  [30.419, -91.193],
  [30.420, -91.171],
  [30.410, -91.167],
  [30.390, -91.790]
]).addTo(LSUmap)
var polyline = L.polyline([
  [30.396681, -91.178379],
  [30.407778, -91.186463],
  [30.412615, -91.188693],
  [30.419462, -91.189229]
]).addTo(LSUmap)
polygon.bindPopup('LSU')
polyline.bindPopup('Railline')
marker.bindPopup('LSU Student Union')
