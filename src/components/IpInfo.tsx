import {IpInfoContainer} from '../styles/styles'
interface IpInfoProps{
    ip: string
    isp:string
    location:string 

}
export const IpInfo = ({ip}:any)=>{
   if(Object.entries(ip).length !== 0){
    return(
        <IpInfoContainer>
            <div>
                <h3>IP ADDRESS</h3>
                <p>{ip.ip}</p>
            </div>
            <div>
                <h3>LOCATION</h3>
                <p>{ip.location.region}</p>
            </div>
            <div>
                <h3>TIME-ZONE</h3>
                <p>{ip.location.timezone}</p>
            </div>
            <div>
                <h3>ISP</h3>
                <p>{ip.isp}</p>
            </div>
        </IpInfoContainer>
    )
   }
   return <IpInfoContainer><h1>Loading</h1></IpInfoContainer>
}