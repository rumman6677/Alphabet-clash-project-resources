function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);  

//     // get random alphabet index 0 to 25;
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueByID(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// function setTextElementValueByID(elementId, value){
//     const element = document.getElementById(elementId);
//     element.innerText = value;
    
// } 
  

function setTextElementValueByID(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextByID(elementId){
    const element = document.getElementById(elementId);
    const text  = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}