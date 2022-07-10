//import { Link } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import ItemCarrinho from "./itemCarrinho";
import ItemsValores from "./itemValores";
import { Content } from "./styles";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Home() {
  const {token, header} = useContext(TokenContext);
  const [produto, setProduto] = useState();
  const [valor, setValor] = useState();
  const navigate = useNavigate()


  useEffect(() => {
    if(!token){
      navigate("/")
    }

    (token && header)&& axios.get("https://hardstore0.herokuapp.com/cart", header).then((response) => {
      console.log(response);
      setProduto(response.data);
      setValor(32);
    });
  }, [valor]);

  console.log("produtos", produto);

  if (produto && valor) {
    return (
      <Content>
        <ItemCarrinho produto={produto} token={header} setValor={setValor}/>
        <ItemsValores produto={produto} valor={valor.toFixed(2)} />
      </Content>
    );
  }
}

export default Home;
