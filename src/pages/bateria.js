import styled from 'styled-components';
import logo from '../data/fccLogo.png'

const Espaço = styled.div`
    background-color: #b8b8b8;
    display: flex;
    align-items: center;
    align:center;
    border: 10px solid orange;
    position: absolute;
    width: 900px;
    height:480px;
    top: 480px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const BateBotao = styled.button`
    background-color: #6d6d6d;
    text-align: center;
    padding: 60px 60px;
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
    margin-left: 40px;
    margin-right: 80px;
`

const Switch = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

const NaoBtn = styled.div`
    display: grid;
    justify-items: center;
    grid-gap: 35px;
`

const SwitchBtn = styled.div`
  background: black;
  position: relative;
  width: 60px;
  height: 28px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    top: 50%;
    left: 4px;
    background: #0000ff;
    transform: translate(${p => (p.interruptor)}px, -50%);
  }
`;

const Info = styled.div`
    background-color: darkgray;
    height: 80px;
    width: 200px;
    font-size: 30px;
    text-align:center;
`

const BarraVol = styled.input`
    background: darkgray;
    accent-color: #0000ff;
    width: 300px;
`

const Logo = styled.img`
  background: ${logo};
`

function Bateria(props) {

    function criandoBotoes(){
        const letras = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        let rows = [];
        for(let i = 0; i < 9; i++){
            rows.push(<BateBotao key={letras[i]} >{letras[i]}</BateBotao>)
        }
        return rows;
    }

    function onOff(x) {
        const newSwitch = [[props.interruptor[0]], props.interruptor[1]]
        newSwitch[x] = +(newSwitch[x] != 32) * 32;
        props.setInterruptor(newSwitch)
    }

    return (
        <>
            <Espaço>
                <Botoes>{criandoBotoes()}</Botoes>
                <NaoBtn>
                    <Switch><SwitchBtn interruptor={props.interruptor[0]} onClick={() =>  onOff(0)}/></Switch>
                    <Info>Heater 2</Info>
                    <BarraVol type="range" min="1" max="100" value={props.volume}  onChange={e => props.setVolume(e.target.value)}/>
                    <Switch><SwitchBtn interruptor={props.interruptor[1]} onClick={() =>  onOff(1)}/></Switch>
                </NaoBtn>
                
            </Espaço>
            <img src={logo} width="75" height="75"/>
        </>
    );
  }
  
  export default Bateria;