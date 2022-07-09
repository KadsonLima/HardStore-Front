import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Footer(props){
    const navigate = useNavigate()
    console.log("ROTA", props)

    return (
        <Container>
            <Buttom onClick={()=>{navigate(props.rota)}}>{props.texto}</Buttom>
        </Container>
    )
}



const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 100%;
position: fixed;
left: 0;
bottom: 0;
z-index: 1;
background-color: #fdc500;
box-shadow: 0 1px 5px;

`
const Buttom = styled.button`
    width: 70%;
    height: 60%;
    border: none;
    background-color: #003f88;
    border-radius: 4px;
    box-shadow: 0 1px 5px black;
    color:white ;
    font-weight: 600;
    font-size: large;
`