var USmap = L.map('USid').setView([40.122326, -99.813705], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(USmap)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = function (feature) {
    var age = feature.properties.MED_AGE
    var stateColor = 'olive'
    if (age < 38) { stateColor = 'green' }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2
    }
  }
  var geojsonOptions = {
    style: stateStyle
  }
  L.geoJSON(data, geojsonOptions).addTo(USmap)
})
