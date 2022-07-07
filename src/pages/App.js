import GlobalStyle from "../styles/global";
import Carrinho from "./carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../context/TokenContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TokenProvider>
        <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
