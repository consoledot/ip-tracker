import styled,{keyframes} from 'styled-components'
export const Background = styled.div`
    background-color:white;
    border-radius:10px;
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding:1rem; 
    max-width:fit-content;
    margin:2rem auto;
   
`
export const IpInfoContainer = styled(Background)`
   
    position:sticky;
    display:flex;
    flex-wrap:wrap;

   
    
   
    z-index:110;
    
    span{
        margin:0.3rem 0;
        width:0.4rem;
        background-color:blue;
    }
    div{
        padding:2rem;
        display:flex;
        margin:0 auto;
        flex-direction:column;
        h3{
            color: hsl(0, 0%, 59%);
        }
        p{
            color:hsl(0, 0%, 17%);
            font-weight:bold;
            margin-top:0.5rem;
        }
    }  
    @media (max-width: 768px) {
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:10px;
       div{
           padding:0.4rem;
           h3{
               font-size:14px;
           }
           p{
               font-size:14px;
           }
       }
      }  
`
export const Header = styled.div`
    text-align:center;
    padding:2rem;
    height:30vh;
    h2{
        color:white;
    }

`
export const InputContainer = styled.form`
    display:flex;
    justify-content:center;
    margin-top:2rem;
    input,div{
        padding:1rem;
    }
    input{
        border:none;
        border-radius:unset;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        padding-right:3rem;
        width:40%;
        font-size:18px;
    }
    div{
        background-color:hsl(0, 0%, 17%);
        color:white;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        font-weight:bold;
       cursor:pointer;
    }
`
export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
export const LoadingSpinner = styled.div`
  pointer-events: none;
  width: 10rem;
  height: 10rem;
  border: 0.2em solid transparent;
  border-color: blue;
  border-top-color: white;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin: 15% auto;
`
