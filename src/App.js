import styled from 'styled-components';
import React, {useState} from 'react';
import Citacao  from "./pages/citacao";

const Bg = styled.div`
    background-color: ${p => (p.color)};
    margin: auto;
    width: auto;
    height: 872px;
`

function App() {
  const [bgColor, setBgColor] = useState("lightgreen");
  return (
    <Bg color={bgColor}>
      <Citacao color={bgColor}/>
    </Bg>
  );
}

export default App;
