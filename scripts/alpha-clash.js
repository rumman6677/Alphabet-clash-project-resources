// function play(){
//     const HomeSection = document.getElementById('home-screen');
//     HomeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event){
const playerPress = event.key;


if(playerPress === 'Escape'){
    gameOver();
}


const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();

if(playerPress === expectedAlphabet){
    console.log('get point');
    const currentScore = getTextElementValueByID('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueByID('current-score', updatedScore);
    
// ---------------------
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText)
    // console.log(currentScore);
    


    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;



    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('lose point')

    const currentLife = getTextElementValueByID('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueByID('current-life', updatedLife);

    if( updatedLife === 0 ){
        gameOver();
    }

// --------------------
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
}
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet :', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');

    setTextElementValueByID('current-life', 5);
    setTextElementValueByID('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueByID('current-score');
    console.log(lastScore);
    setTextElementValueByID('last-score', lastScore);

    const currentAlphabet = getElementTextByID('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    // console.log(currentAlphabet);
}

