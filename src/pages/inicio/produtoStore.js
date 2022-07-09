import { Produtos } from "./styles";
import styled from "styled-components";
import {BsFillCartFill} from "react-icons/bs"
import { useState } from "react";
import axios from "axios";


export default function itemCarrinho({produto, token, setValor}){
    console.log("esse é o token", token)
    const produtos = (produto )? (produto.map((item, index)=>{
    

      const [qtd, setQtd] = useState(item.qtd)

      function addItem(tipo){
          console.log(item)
          axios.post(`http://localhost:5000/cart/`, {item,"qtd":1}, token);
      }

      return ( 
        <Produto key={index}>
          <div>
            <img src={item.imagem} alt={item.nome}/>
            <div className="name">
              <span>{item.nome}</span>
              <span>R$ {item.preco}</span>
            </div>
          </div>
          <div className="buttonQuant">
            <div>
              <Button onClick={()=>{addItem(item)}}><BsFillCartFill/></Button>
            </div>
            Disponivel.: {item.quantidade}
          </div>
        </Produto>)
     })):("Nenhum item encontrado");

    return (
        <Produtos>
          {produtos}
      </Produtos>

    )

}

const Produto = styled.div`
  margin-bottom: 10px;
  height: 20%;
  width: 100%;
  background-color: #ededed;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  div{
    width: 50%;
    display: flex;
    gap:10px
  }

  .name{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span:first-child{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .buttonQuant{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;

    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;

     
    }
  }
  img{
    height: 100%;
  }
`

const Button = styled.button`
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    svg{
      width: 100%;
      height: 100%;
      color: black;
      cursor: pointer;
    }
    
`

