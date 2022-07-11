import  {Container}  from "./Login"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function Finalizar(){
    const navigate = useNavigate()
    const [colorButton, setColorButton] = useState("#003f88");
    

    return(

        <Container colorButton={colorButton}>
            <h4>Compra realizada com sucesso</h4>
            <button onClick={()=> navigate("/produtos")}>Comprar novamente</button>
        </Container>
    )
}