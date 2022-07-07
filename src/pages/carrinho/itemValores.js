import styled from "styled-components";



export default function itemCarrinho({produto}){


    const produtos = (produto )? (produto.map((item, index)=>{
     return ( <Produto key={index}>
          <div className="name">
            <span>{item.quantidade}</span>
            <span>{item.nome}</span>
          </div>
          <span>{item.preco} R$</span>
        </Produto>)
    })):("Nenhum item encontrado");

    return (
        <Items>
          {produtos}
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
  width: 80%;
  background-color: #ededed;
  border: solid 2px black;
  padding: 10px 30px;
  overflow: auto;
  margin-bottom: 10px;
`
