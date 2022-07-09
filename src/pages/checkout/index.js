//import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Pagamento from "./formaPagamento";
import { Content } from "./styles";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Home() {
  const [produto, setProduto] = useState();
  const {token, header, valor} = useContext(TokenContext);
  const navigate = useNavigate();
 
  useEffect(() => {
    if(!token){
      navigate("/")
    }

    (token && header)&& axios.get("http://localhost:5000/cart", header).then((response) => {
      console.log(response);
      setProduto(response.data);
    });
  }, []);


  if (produto) {
    return (
      <Content>
        <Pagamento produto={produto} valor={valor}/>
      </Content>
    );
  }
}

export default Home;
