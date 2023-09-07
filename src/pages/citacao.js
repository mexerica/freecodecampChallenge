import styled from 'styled-components';

const Espaço = styled.div`
    background-color: white;
    color:${p => (p.color)};
    position: absolute;
    width: 480px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const Alusao = styled.h1`
    display: flex;
    justify-content: center;
`

const Citador = styled.h2`
    display: flex;
    justify-content: right;
    margin-left: 20px;
`

const CitaBotao = styled.button`
    background-color: ${p => (p.color)};
    color:white;
    border:none;
    height: 40px;
    margin-right: ${p => (p.margenR)}px;
    margin-left: ${p => (p.margenL)}px;
    &:hover {
        filter: brightness(75%);
    }
`

const Eu = styled.div`
    position: absolute;
    top:80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:white;
`

function Citacao(color) {
    return (
        <>
            <Espaço color={color.color}>
                <Alusao>funcionou</Alusao>
                <Citador>-funcionou</Citador>
                <CitaBotao margenR='5' margenL='10' color={color.color}>
                    <img width='15' height='10' src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png'/>
                </CitaBotao>
                <CitaBotao margenR='120' margenL='5' color={color.color}>
                    <img width='15' height='10' src='https://th.bing.com/th/id/R.83e4e505fe021a7d8fadd0586641b651?rik=pDhBsbwLNlWkWA&pid=ImgRaw&r=0'/>
                </CitaBotao>
                <CitaBotao margenR='0' margenL='120' color={color.color} >New quote</CitaBotao>
            </Espaço>
            <Eu>by Mexerica</Eu>
        </>
    );
  }
  
  export default Citacao;