import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
interface MapProps{
  coordinate:number[]
  name:string
}
export const Map = ({name,coordinate}:MapProps)=>(
   <MapContainer center={[coordinate[0],coordinate[1]]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '60vh',zIndex:100}}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[coordinate[0],coordinate[1]]}>
      <Popup>
       {name}
      </Popup>
    </Marker>
  </MapContainer> 

) 