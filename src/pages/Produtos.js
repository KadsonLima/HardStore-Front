import { useState, useEffect, useContext } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import imglogo from "../assets/imglogo.png"
import { TokenContext } from '../context/TokenContext';


export default function Produtos(){ 
  const [produtos, setProdutos] = useState();
  const [valor, setValor] = useState();
  const {token, header} = useContext(TokenContext)

  useEffect(()=>{

    axios.get("https://hardstore0.herokuapp.com/produtos",header)
        .then(response =>{
          console.log(response)
          setProdutos(response.data.produtos);
          setValor(response.data.valor);
        })
  }, [])


  return (
      <React.Fragment>
     <Header>
    <div>
     <img src={imglogo} alt="logo"/>
     <h1>HardStore</h1>
    </div>
    <div>
    <ion-icon name="search-outline"></ion-icon>
    <input></input>
    </div>
     </Header>
    <Container>
     {produtos?.map(((item, index)=>{
      return ( 
        <Produto key={index}>
          <div>
            <img src={item.imagem} alt={item.nome}/>
              <h1>R$ {item.preco}</h1>
            </div>
             <div>
            <div className="name-icon"> <h1>R$ {item.nome}</h1> <ion-icon name="cart-outline"></ion-icon></div>
              <div className="descricao">R$ {item.descricao}</div>
            </div>
            
        
        </Produto>)
        }))}
    </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
background-color: #FFFFFF;
height: 80vh;

`
const Header = styled.div`
background-color: #fdc500;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
img{
    height: 50px;
    width: 50px;
}
div{
display: flex;
justify-content: center;
align-items: flex-end;
width: 80vw;
margin-top: 10px;
font-size: 25px;
color: #003f88;
h1{
    color: #003f88;
    font-size: 25px;
    margin-top: 10px;
}
input{
height: 25px;
font-size: 20px;
width: 300px;
}
}
`
const Produto = styled.div`
display: flex;
`
