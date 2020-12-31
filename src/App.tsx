import {useEffect, useState, useRef} from 'react'
import {Header,InputContainer} from './styles/styles'
import {IpInfo,Map, Loading} from './components'
import backgroundImage from './pattern-bg.png'
import './App.css'
function App() {
  const key = process.env.REACT_APP_API_KEY
  const [ipAddress, setIpAddress] = useState({} as any)
  const [searchtText, setSearchText] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)
  
  const SetText =(e?:any)=>{
    if(e)e.preventDefault()
    setIpAddress("")
    if(inputRef.current)inputRef.current.value = ""
    if(searchtText !== ""){
      fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&domain=${searchtText}`)
      .then(res=>res.json())
      .then(data=>setIpAddress(data))
      .catch(err => console.log(err))
    }else{
      fetchAddress()
     
    }
   
  }
  const fetchAddress =()=>{
    fetch(`https://geo.ipify.org/api/v1?apiKey=${key}`)
    .then(res=>res.json())
    .then(data=>setIpAddress(data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    return(
      fetchAddress()
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <div style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="App">
      <Header>
        <h2>IP Address Tracker</h2>
        <InputContainer  onSubmit={(e)=> SetText(e)}>
            <input ref={inputRef} placeholder="Search for any IP address or domain" onChange={e=> {
              e.preventDefault()
              setSearchText(e.target.value)}
              }/>
           <div onClick = {()=> SetText()}>{`${`>`}`}</div>
        </InputContainer>
       <IpInfo ipAdress = {ipAddress}/>
      </Header>
    </div>
    {Object.entries(ipAddress).length === 0 ? "": <Map name={ipAddress.isp} coordinate={[ipAddress.location.lat,ipAddress.location.lng]}/>}
    </>
  );
}

export default App;
