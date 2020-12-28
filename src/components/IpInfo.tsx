import {IpInfoContainer} from '../styles/styles'
interface IpInfoProps{
    ip: string
    isp:string
    location:any
}
export const IpInfo = ({ipAdress}:any)=>{
    const {ip,location,isp}:IpInfoProps = ipAdress
   if(Object.entries(ipAdress).length !== 0){
        return(
            <IpInfoContainer>
                <div>
                    <h3>IP ADDRESS</h3>
                    <p>{ip}</p>
                </div>
                <div>
                    <h3>LOCATION</h3>
                    <p>{location.region}</p>
                </div>
                <div>
                    <h3>TIME-ZONE</h3>
                    <p>{location.timezone}</p>
                </div>
                <div>
                    <h3>ISP</h3>
                    <p>{isp}</p>
                </div>
            </IpInfoContainer>
        )
   }
   return <IpInfoContainer><h1>Loading</h1></IpInfoContainer>
}