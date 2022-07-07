//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCarrinho from './itemCarrinho';
import ItemsValores from './itemValores';
import { Content, Header, Footer } from "./styles";
import axios from "axios";

function Home() {
  const [produto, setProduto] = useState();

  useEffect(()=>{
    axios.get("http://localhost:5000/")
        .then(response =>{
          setProduto(response.data);
        })
  }, [])

  console.log("produtos", produto)

  return (
    <Content>
      <Header />
      <ItemCarrinho produto={produto}/>
      <ItemsValores produto={produto}/>
      <Footer />
    </Content>
  );
}

export default Home;
