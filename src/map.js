import $L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'

let defaultIcon = $L.icon({
  iconUrl:icon
})

$L.Marker.prototype.options.icon = defaultIcon

export default $L