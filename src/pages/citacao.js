import styled from 'styled-components';

const AppQuotes = styled.div`
    vertical-align: top;
    display: inline-block;
    text-align: center;
`

const Espaço = styled.div`
    background-color: white;
    color:${p => (p.color)};
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const Alusao = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 300%;
    span{ 
        color: red;
    }
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
    height: 50px;
    margin-right: ${p => (p.margenr)}px;
    margin-left: ${p => (p.margenl)}px;
    &:hover {
        filter: brightness(115%);
    }
`

const Eu = styled.div`
    position: absolute;
    top:80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:white;
`

function Citacao(props) {
    const colorsList = ["green", "#a3ffb4", "#0dc5ff", "#556d76", "#9c6860", "#ff0000", "#000000", "#6e57d2", "#ffcb0d", "#66cdaa"];
    const quotes = [
        ["I am vegeance, i am the night, i am batman", "Batman"],
        ["With great power comes great responsibility", "Uncle Ben"],
        ["I am your father", "Darth Vader"],
        ["One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them", "Sauron"],
        ["Time takes everybody out. Time is undefeated", "Rocky Balboa"],
        ["A scattered dream that's like a far-off memory... a far-off memory that's like a scattered dream... i want to line the pieces up... yours and mine", "Kingdom hearts"],
        ["It is only with the heart that one can see rightly; what is essential is invisible to the eye", "Little Prince"],
        ["I've seen things you people wouldn't believe... Attack ships on fire off the shoulder of Orion... I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain... Time to die", "Roy Batt"],
    ];
    
    function changeQuote() {
        props.setBgColor(colorsList[Math.floor(Math.random() * colorsList.length)]);
        props.setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    function tweetQuote(){
        const url = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + '"' + props.quote[0] + '". ' + props.quote[1];
        window.open(url, '_blank');
    }

    return (
        <AppQuotes>
            <Espaço color={props.color}>
                <Alusao><span>"</span>{props.quote[0]}.</Alusao> 
                <Citador>-{props.quote[1]}</Citador>
                <CitaBotao margenr='5' margenl='10' color={props.color} onClick={() => tweetQuote()}>
                    <img width='30' height='20' src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png'/>
                </CitaBotao>
                <CitaBotao margenr='120' margenl='5' color={props.color} onClick={() => tweetQuote()}>
                    <img width='30' height='20' src='https://th.bing.com/th/id/R.83e4e505fe021a7d8fadd0586641b651?rik=pDhBsbwLNlWkWA&pid=ImgRaw&r=0'/>
                </CitaBotao>
                <CitaBotao margenr='0' margenl='240' color={props.color} onClick={() => changeQuote()}>New quote</CitaBotao>
            </Espaço>
            <Eu>by Mexerica</Eu>
        </AppQuotes>
    );
  }
  
  export default Citacao;