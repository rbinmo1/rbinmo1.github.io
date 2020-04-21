var USmap = L.map('USid').setView([40.122326, -99.813705], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(USmap)

var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'

jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = { color: 'green' }
  L.geoJSON(data, { style: stateStyle } }).addTo(USmap)
})
