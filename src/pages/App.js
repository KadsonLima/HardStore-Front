import GlobalStyle from "../styles/global";
import Carrinho from "./carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../context/TokenContext";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TokenProvider>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
