import {Header,InputContainer} from './styles/styles'
import {IpInfo,Map} from './components'

import backgroundImage from './pattern-bg.png'
import './App.css'
function App() {
  return (
    <>
    <div style={{backgroundImage:`url(${backgroundImage})`}} className="App">
      <Header>
        <h2>IP Address Tracker</h2>
        <InputContainer>
          <input placeholder="Search for any IP address or domain"/>
          <div>{`>`}</div>
        </InputContainer>
       <IpInfo/>
      </Header>
    </div>
    <Map/>
    </>
  );
}

export default App;
