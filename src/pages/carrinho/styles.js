import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: #fdc500;

`
const Footer = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fdc500;

`

const Content = styled.div`
  margin:70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: steelblue;
  gap: 10px;
`;

const Produtos = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 60%;
  background-color: white;
  border: solid 2px black;
  overflow: auto;
`




export {Content, Header, Footer, Produtos};
