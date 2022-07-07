import { Produtos } from "./styles";
import styled from "styled-components";



export default function itemCarrinho({produto}){
    console.log("produto do carrin", produto)

    const produtos = (produto )? (produto.map((item, index)=>{
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
              <Button cor="green"></Button>
              <Button cor="red"></Button>
            </div>
            Qtd.: {item.quantidade}
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
    width: 40%;
    height: 80%;
    background-color: ${props=>props.cor};
`

