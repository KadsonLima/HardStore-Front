import styled from "styled-components";
import Formas from './formasPagamento';
import { TailSpin } from 'react-loader-spinner';


export default function Pagamento({valor, validar, validade, pagamento}){

  const tiposPagamentos = [
    {tipo:"Cartão de Crédito", src:"https://processadorademo.zendesk.com/hc/article_attachments/115025089307/cartao2.png"},
    {tipo:"Depósito Bancario", src:"https://images.vexels.com/media/users/3/266055/isolated/preview/3c4c7abc367fedd8b93c085b030d1e90-a-cone-de-dinheiro-de-nota-de-cifra-o.png"},
    {tipo:"Transferência Pix", src:"https://s2.glbimg.com/q1KKOHq_lEczKooshsEx0YvM3kk=/0x0:945x530/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/d/9KN7bBSd6UKk4hcitczA/marca-pix-1-.jpg"}
]

  const carregar = (pagamento)?(<TailSpin className="circle" ariaLabel="loading-indicator" />):((validade)? <>FORMA PAGAMENTO APROVADO</> : (
          <>
          <h4>Escolha sua forma de pagamento</h4>
          <div>
            {tiposPagamentos.map((e, index)=>{return (<Formas validar={validar} key={index} tipo={e.tipo} src={e.src}/>)})}
          </div>
          <Pagar>
            <span>TOTAL</span>
            <span>{valor.toFixed(2)} R$</span>
          </Pagar>
          </>)
          )

    return (
        <FormaPagamento>
          {carregar}
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
  svg{
    width: 100%;
    display: flex;
    justify-content:center;
  }
  h4{
    font-size: 20px;
    margin-bottom: 10px;
  }
`

