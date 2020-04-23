var USmap = L.map('USid').setView([40.122326, -99.813705], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(USmap)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
  var stateStyle = function (feature) {
    var CropArea = feature.properties.CROP_ACR12
    var stateColor = 'olive'
    if (CropArea < 1000000) { stateColor = 'green' }
    return {
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2
    }
  }
  var geojsonOptions = {
    style: stateStyle
  }
  var stateLayerOptions = {
    style: stateStyle,
    onEachFeature: createPopup
}
  L.geoJSON(data, stateLayerOptions).addTo(USmap)
})

var createPopup = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var CropArea = feature.properties.CROP_ACR12
  layer.bindPopup('CropArea ' + name + ': ' + CropArea + '<br>National average: 7793808 acres')
}
