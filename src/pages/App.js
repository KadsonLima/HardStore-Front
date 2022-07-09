import GlobalStyle from "../styles/global";
import Carrinho from "./carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../context/TokenContext";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Produtos from "./Produtos";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TokenProvider>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
