import styled from "styled-components";



export default function itemsValores({produto, valor}){


    const produtos = (produto )? (produto.map((item, index)=>{
     return ( <Produto key={index}>
          <div className="name">
            <span>{item.quantidade}</span>
            <span>{item.nome}</span>
          </div>
          <span>{item.preco} R$</span>
        </Produto>)
    })):("Nenhum item encontrado");

    const Total = (valor)?<span>{valor} R$</span>:""

    return (
        <Items>
          <div className="separador">{produtos}</div>
          <div className="total">Total{Total}</div>
      </Items>

    )

}

const Produto = styled.div`
  margin-bottom: 10px;
  height: 10%;
  width: 100%;
  background-color: #ededed;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    gap:10px
  }

  .name{
    display: flex;
    justify-content: space-between;
  }

`

const Items = styled.div`
  height: 40%;
  width: 100%;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 2px black;
  padding: 10px;
  margin-bottom: 10px;

  .separador{
    width: 100%;
    height: 90%;
    overflow-y: auto;
  }

  .total{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`
