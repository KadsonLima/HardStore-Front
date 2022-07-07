import GlobalStyle from "../styles/global";
import Carrinho from "./carrinho";
import Checkout from "./checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../context/TokenContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TokenProvider>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
