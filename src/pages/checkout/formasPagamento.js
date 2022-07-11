import { useState } from "react";
import styled from "styled-components";


export default function Pagamento({tipo, src, validar}){

    function validarPagamento(event){
      event.preventDefault();
      validar(true)
    }
    const [click, setClick] = useState(true)


    const mini = (
        <Choice onClick={()=>{setClick(!click)}}>  
            <img alt={tipo} src={src} />
            <span>{tipo}</span>
        </Choice>)

    const form = (
      <Form onSubmit={(e)=>validarPagamento(e)}>
        <Choice onClick={()=>{setClick(!click)}}>  
            <img alt={tipo} src={src} />
            <span>{tipo}</span>
        </Choice>
        <input required type="name" name="nome" placeholder="Nome Completo"/>
        <input required type="email" name="email" placeholder="E-mail"/>
        <input required type="cpf" name="cpf" placeholder="CPF"/>
        <input type="submit" value="Checar Dados"/>

      </Form>
    )

    const FormaPagar = (click)?(mini):(form)

    return FormaPagar
   


}

const Form = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  div:first-child{
    background-color: gray;
  }
  input{
    width: 80%;
    height: 15%;
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
    .form{
      margin-bottom: 20px;
    }
`