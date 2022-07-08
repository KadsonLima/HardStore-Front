import GlobalStyle from "../styles/global";
import Carrinho from "./carrinho";
import Checkout from "./checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../context/TokenContext";
import Login from "./Login";
import Cadastro from "./Cadastro";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TokenProvider>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
