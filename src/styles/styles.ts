import styled from 'styled-components'
export const IpInfoContainer = styled.div`
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-wrap:wrap;
    max-width:fit-content;
    margin:2rem auto;
    padding:1rem;
    box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    z-index:100;
    position:sticky;
    span{
        margin:0.3rem 0;
        width:0.4rem;
        background-color:blue;
    }
    div{
        padding:2rem;
        display:flex;
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
       
    }
`