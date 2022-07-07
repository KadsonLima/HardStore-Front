//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCarrinho from './itemCarrinho';
import ItemsValores from './itemValores';
import { Content } from "./styles";
import axios from "axios";

function Home() {
  const [produto, setProduto] = useState();
  const [valor, setValor] = useState();

  useEffect(()=>{
    axios.get("https://hardstore0.herokuapp.com/produtos")
        .then(response =>{
          console.log(response)
          setProduto(response.data.produtos);
          setValor(response.data.valor);
        })
  }, [])

  console.log("produtos", produto)

  return (
    <Content>
      <ItemCarrinho produto={produto}/>
      <ItemsValores produto={produto} valor={(valor.toFixed(2))}/>
    </Content>
  );
}

export default Home;
