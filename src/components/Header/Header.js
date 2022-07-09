import Logo from '../../assets/imglogo.png';
import styled from "styled-components";

export function Header(){

    return (
        <Container>
            <Title><img src={Logo} />HardStore</Title>
        </Container>
    )
}



const Container = styled.header`
display: flex;
height: 70px;
width: 100%;
position: fixed;
left: 0;
top: 0;
z-index: 1;
background-color: #fdc500;
justify-content: center;
align-items: center;
box-shadow: 0 1px 5px;

`

const Title = styled.div`
    font-family: 'Secular One',sans-serif;
    font-size: 40px;
    color: #003f88;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5px;
    img{
        height: 60%;
        object-fit: contain;
    }
`
