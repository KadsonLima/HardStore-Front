import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import imglogo from "../assets/imglogo.png"



export default function Produtos(){ 
  const [produtos, setProdutos] = useState();
  const [valor, setValor] = useState();

  useEffect(()=>{
    axios.get("https://hardstore0.herokuapp.com/produtos")
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
     {produtos.map(((item, index)=>{
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

`
const Header = styled.div`
background-color: #fdc500;
height: 200px;

`
const Produto = styled.div`
display: flex;
`
