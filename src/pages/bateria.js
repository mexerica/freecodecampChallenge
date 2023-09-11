import styled from 'styled-components';

const Espaço = styled.div`
    background-color: none;
    border: 5px solid orange;
    position: absolute;
    width: 720px;
    height:720px;
    top: 480px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const BateBotao = styled.button`
    background-color: darkgray;
    text-align: center;
    width: 180px;
    height: 360px;
    color:black;
    height: 50px;
    &:hover {
        filter: brightness(115%);
    }
`

const Botoes = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    gap: 5px 5px;
`

function Bateria() {

    function criandoBotoes(){
        const letras = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        let rows = [];
        for(let i = 0; i < 9; i++){
            rows.push(<BateBotao>{letras[i]}</BateBotao>)
        }
        return rows;
    }

    return (
        <Espaço>
            <Botoes>{criandoBotoes()}</Botoes>
        </Espaço>
    );
  }
  
  export default Bateria;