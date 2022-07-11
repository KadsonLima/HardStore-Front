//import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Pagamento from "./Pagamento";
import { Content } from "./styles";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { Footer } from "../../components/Footer/Footer";


function Home() {
  const [validate, setValidate] = useState(false);
  const [loadPay, setLoadPay] = useState(false);
  const {token, header, valor} = useContext(TokenContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!token){
      navigate("/")
    }

    (token && header)&& axios.get("http://localhost:5000/cart", header).then((response) => {
      console.log(response);
    });
  }, [header, navigate, token]);

  console.log("ROTA", loadPay)

  
    return (
      <>
      <Content>
        <Pagamento  valor={valor} pagamento={loadPay} validade={validate} validar={setValidate}/>
      </Content>
      <Footer valor={valor} validade={validate} token={header} validarPagamento={setLoadPay} texto="Realizar Pagamento"/></>

    );
  
}

export default Home;