import styled from "styled-components"

export function Header(){

    return (
        <Header>
            HardStore
        </Header>
    )
}



const Header = styled.header`
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
`
