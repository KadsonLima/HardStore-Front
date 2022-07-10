import { useState, useEffect, useContext } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import imglogo from "../assets/imglogo.png"
import { TokenContext } from "../context/TokenContext";



export default function Produtos(){ 
  const {header} = useContext(TokenContext);
  console.log("SHAUSHAU", header)
  const [produtos, setProdutos] = useState();
  const [valor, setValor] = useState();

  useEffect(()=>{
    axios.get("http://localhost:5000/produtos", header)
        .then(response =>{
          console.log(response.data)
          setProdutos(response.data);
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
     {(produtos)&&produtos.map(((item, index)=>{
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
