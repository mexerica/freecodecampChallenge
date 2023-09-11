import styled from 'styled-components';
import React, {useState} from 'react';
import Citacao  from "./pages/citacao";
import Bateria from './pages/bateria';

const Bg = styled.div`
    background-color: ${p => (p.color)};
    margin: auto;
    width: auto;
    height: 872px;
`

function App() {
  const [pages, setPages]  = useState("bateria")
  const [bgColor, setBgColor] = useState("gray");
  const [quote, setQuote] = useState(["I am batman", "Batman"]);
  return (
    <Bg color={bgColor}>
      {
        (pages == "citacao") ? <Citacao color={bgColor} setBgColor={setBgColor} quote={quote} setQuote={setQuote}/> : 
        <Bateria /> 
      }
      
    </Bg>
  );
}

export default App;
