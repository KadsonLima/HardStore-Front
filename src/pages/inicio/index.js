//import { Link } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import ItemCarrinho from "./produtoStore";
import { Content } from "./styles";
import { TokenContext } from "../../context/TokenContext";
import { Footer } from "../../components/Footer/Footer.js";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Home() {
  const {token, header, valor, setValor} = useContext(TokenContext);
  const [produto, setProduto] = useState();
  const [rota, setRota] = useState();
  const navigate = useNavigate()


  useEffect(() => {
    if(!token){
      navigate("/")
    }

    (token && header)&& axios.get("http://localhost:5000/produtos", header).then((response) => {
      console.log(response);
      setProduto(response.data);
    });
  }, [valor]);

  console.log("produtos", produto);

  if (produto) {
    return (<>
      <Content>
        <ItemCarrinho produto={produto} token={header} setValor={setValor}/>
      </Content>
      <Footer valor={valor} rota="/carrinho" texto="Carrinho de Compras"/></>
    );
  }
}

export default Home;
