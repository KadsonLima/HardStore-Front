import { Produtos } from "./styles";
import styled from "styled-components";
import {GoPlus, GoDash} from "react-icons/go"
import { useState } from "react";
import axios from "axios";


export default function itemCarrinho({produto, token}){
    console.log("produto do carrin", produto.produtosEstoque);
    console.log("esse é o token", token)
    const produtos = (produto )? (produto.map((item, index)=>{
    

      const [qtd, setQtd] = useState(item.qtd)

      function atualizarQuantidade(tipo){
        if(tipo === -1 && qtd === 0) return;
        setQtd(qtd+tipo)
        axios.put(`http://localhost:5000/cart/`, {"id":item._id,"qtd":qtd}, token)

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
              <Button cor="green" onClick={()=>{atualizarQuantidade(+1)}}><GoPlus/></Button>
              <Button cor="red" onClick={()=>{atualizarQuantidade(-1)}}><GoDash/></Button>
            </div>
            Qtd.: {item.qtd}
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
    height: 80%;
    background-color: ${props=>props.cor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    svg{
      height:80%;
      color: white;
    }
    &&:active{
      filter: opacity(0.1);
    }
    &&:hover{
      opacity: 0.5;
    }
`

