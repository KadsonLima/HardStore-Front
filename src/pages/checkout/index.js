//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagamento from "./formaPagamento";
import { Content } from "./styles";
import axios from "axios";

function Home() {
  const [produto, setProduto] = useState();
  const [valor, setValor] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/produtos").then((response) => {
      console.log(response);
      setProduto(response.data.produtos);
      setValor(response.data.valor);
    });
  }, []);

  console.log("produtos", produto);

  if (produto && valor) {
    return (
      <Content>
        <Pagamento/>
      </Content>
    );
  }
}

export default Home;
