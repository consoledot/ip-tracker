import {useEffect, useState} from 'react'
import {Header,InputContainer} from './styles/styles'
import {IpInfo,Map} from './components'

import backgroundImage from './pattern-bg.png'
import './App.css'
function App() {
  const key = process.env.REACT_APP_API_KEY
  const [ipAddress, setIpAddress] = useState({} as any)
  const [searchtText, setSearchText] = useState("")
  
  const SetText =(e:any)=>{
    e.preventDefault()
    setIpAddress("")
    fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&domain=${searchtText}`)
    .then(res=>res.json())
    .then(data=>setIpAddress(data))
    .catch(err => console.log(err))
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
    <div style={{backgroundImage:`url(${backgroundImage})`}} className="App">
      <Header>
        <h2>IP Address Tracker</h2>
        <InputContainer onSubmit={(e)=> SetText(e)}>
            <input placeholder="Search for any IP address or domain" onChange={e=> {
              e.preventDefault()
              setSearchText(e.target.value)}
              }/>
            <div>{`>`}</div>
        </InputContainer>
       <IpInfo ip = {ipAddress}/>
      </Header>
    </div>
    <Map/>
    </>
  );
}

export default App;
