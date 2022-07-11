import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

export function Footer({rota, validade, validarPagamento, texto, token}){
    const navigate = useNavigate()
    function rotaPagamento(){
        if(rota){
            navigate(rota);
            return;
        }else if(validade){
            validarPagamento(true)
            alert("PAGAMENTO EFETUADO")
            axios.post("https://hardstore0.herokuapp.com/compras",{}, token)
                .then(response =>{
                    console.log(response);
                    navigate("/finalizar")
                })
        }else{
            alert("PAGAMENTO NAO APROVADO")
        }
    }

    return (
        <Container>
            <Buttom onClick={()=>rotaPagamento()}>{texto}</Buttom>
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