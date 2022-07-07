import styled from "styled-components";



export default function Pagamento({produto}){
    console.log("produto do carrin", produto)

    const produtos = (produto )? (
        "dsadsadsa"
     ):("Nenhum item encontrado");

    return (
        <FormaPagamento>
            <h4>Escolha sua forma de pagamento</h4>
          <div>
            <Choice>
              <img alt="cartao" src="https://processadorademo.zendesk.com/hc/article_attachments/115025089307/cartao2.png" />
              <span>Cartão de Credito</span>
            </Choice>
            <Choice>
              <img alt="deposito" src="https://images.vexels.com/media/users/3/266055/isolated/preview/3c4c7abc367fedd8b93c085b030d1e90-a-cone-de-dinheiro-de-nota-de-cifra-o.png" />
              <span>Depósito Bancario</span>
            </Choice>
            <Choice>
              <img alt="pix" src="https://s2.glbimg.com/q1KKOHq_lEczKooshsEx0YvM3kk=/0x0:945x530/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/d/9KN7bBSd6UKk4hcitczA/marca-pix-1-.jpg" />
              <span>Transferência Pix</span>
            </Choice>
          </div>
          <Pagar>
            <span>TOTAL</span>
            <span>300.00 R$</span>
          </Pagar>
      </FormaPagamento>

    )

}
const Pagar = styled.footer`
  margin-top: 80px;
  width: 80%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

`

const FormaPagamento = styled.div`
  margin-bottom: 10px;
  height: 100%;
  width: 100%;
  background-color: #ededed;
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    width: 100%;
    gap: 70px;
    
  }

  h4{
    font-size: 20px;
    margin-bottom: 10px;
  }
`

const Choice = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 80%;
    img{
      width: 60px;
      object-fit: cover;
    }

    &&:hover{
      background-color: green;
      color: white;
    }

    span{
      font-weight: 700;
    }
`
