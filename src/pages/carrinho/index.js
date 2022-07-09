//import { Link } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import ItemCarrinho from "./itemCarrinho";
import ItemsValores from "./itemValores";
import { Content } from "./styles";
import { TokenContext } from "../../context/TokenContext";
import { Footer } from "../../components/Footer/Footer";
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

    (token && header)&& axios.get("http://localhost:5000/cart", header).then((response) => {
      console.log(response);
      setProduto(response.data);
    });
  }, [valor]);

  console.log("produtos", produto);

  if (produto) {
    return (<>
      <Content>
        <ItemCarrinho produto={produto} token={header} setValor={setValor}/>
        <ItemsValores produto={produto} valor={valor.toFixed(2)} setValor={setValor}/>
      </Content>
      <Footer valor={valor} rota="/checkout" texto="Finalizar Compra"/></>
    );
  }
}

export default Home;
