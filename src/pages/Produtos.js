import { useState, useEffect, useContext } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import imglogo from "../assets/imglogo.png"
import { TokenContext } from '../context/TokenContext';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.js"

 function Produto({item}){
    const [selected, setSelected] = useState(false)
    const {token, header} = useContext(TokenContext)
  function adicionarAoCarrinho(id){
    let body={
        id: id
        }
    if(selected){
    setSelected(false)
    axios.put("http://localhost:5000/cart", body, header)
          .then(response =>{
            console.log(response)
        })

    }else{
     setSelected(true)
    
     axios.post("http://localhost:5000/cart", body, header)
          .then(response =>{
      console.log(response)
  })
     }
    }
    return(
        <Item selected= {selected}>
        <div>
            <img src={item.imagem} alt={item.nome}/>
              <h2>R$ {item.preco}</h2>
            </div>
             <div>
            <div className="name-icon"> <h1> {item.nome}</h1> <ion-icon onClick={()=> adicionarAoCarrinho(item._id)} name="cart-outline"></ion-icon></div>
              <div className="descricao"> {item.description}</div>
            </div>
        </Item>
    )
}
export default function Produtos(){ 
  const [produtos, setProdutos] = useState();
  const [pesquisa, setPesquisa] = useState();
  const {token, header} = useContext(TokenContext)
  const navigate = useNavigate()

    function pesquisar(search){
        if(search){
         
        let aux = produtos.filter(e=>{
                const {nome, description} = e;
                if((nome.toLowerCase()).includes(search) || (description.toLowerCase()).includes(search) ){
                    return e;
                }
            })
            setPesquisa(aux)
        }else{
            setPesquisa(produtos)
        }
        
    }


  useEffect(()=>{

    axios.get("http://localhost:5000/produtos",header)
        .then(response =>{
          console.log(response)
          setProdutos(response.data)
          setPesquisa(response.data)
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
    <input onChange={e => pesquisar(e.target.value)}></input>
    </div>
     </Header>
    <Container>
     {pesquisa?.map(((item, index)=>{
      return ( 
        <Produto key={index} item = {item}>
        </Produto>)
        }))}

    </Container>
    <Footer texto={`Ir para o carrinho`} rota={`/produtos`}>
    
     </Footer>
    </React.Fragment>
  );
}

const Container = styled.div`
background-color: #FFFFFF;
height: 100%;

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


const Item = styled.div`
  display: flex;
  margin-bottom: 10px;
  min-height: 18vh;
  width: 100vw;
  background-color: #ededed;
  padding: 10px;
  justify-content: flex-start;
  div{
   margin-right: 10px;
  h1{
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color:black;
    }
 h2{
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    }
  img{
    width: 80px;
    height: 80px;
  }
  .name-icon{
    display: flex;
    justify-content: space-between;
    font-size: 30px;
  }
  .descricao{
    padding: 5px;
    display: flex;
    align-items: center;
    line-break: normal;
    background-color: white;
    min-height: 8vh;
    height: auto;
    width: 70vw;
    margin-top: 10px;
    margin-top: 5%;
  }
  .name-icon{
    color:${props => props.selected? "#2193ff": "black" };
  } 
  }
`
