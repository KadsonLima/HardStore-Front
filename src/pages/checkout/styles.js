import styled from "styled-components";



const Content = styled.div`
  margin:70px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 170px);
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




export {Content, Produtos};
