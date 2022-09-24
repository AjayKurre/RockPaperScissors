const selchoices = [ 'Rock' , 'Paper', 'Scisors']
function select() {return selchoices[Math.floor(Math.random()*3)]}

const personSel = document.querySelectorAll('.rpsButton')
const scoreDiv = document.getElementById('player-score')
const handsDiv = document.getElementById('hands')
const resultDiv = document.getElementById('result')

function selWinner(compChoice, persChoice) {
    
    if(compChoice == persChoice) {return 'Draw';} 
    else if(compChoice == 'Rock' && persChoice == 'Paper') { return 'Win';} 
    else if(compChoice == 'Rock' && persChoice == 'Scisors') { return 'Loss';} 
    else if(compChoice == 'Paper' && persChoice == 'Rock') { return 'Loss';} 
    else if(compChoice == 'Paper' && persChoice == 'Scisors') { return 'Win';}
    else if(compChoice == 'Scisors' && persChoice == 'Paper') { return 'Loss';}
    else if(compChoice == 'Scisors' && persChoice == 'Rock') { return 'Win';}
}
let score = 0;
personSel.forEach(element => { 
    element.onclick =() => { 
        let persChoice = element.value
        let compChoice = select()
        if(selWinner(compChoice, persChoice) =='Win') { score++}
        else if(selWinner(compChoice, persChoice) =='Loss') { score--}
        scoreDiv.innerText = score
        handsDiv.innerText = `👨 ${persChoice} VS 🤖 ${compChoice}`
        resultDiv.innerText = `You ${selWinner(compChoice, persChoice)}!`
    }   
});

const resetBtn = document.getElementById('endGameButton')
resetBtn.onclick = () => {
    score = 0
    scoreDiv.innerText = ''
    handsDiv.innerText = ''
    resultDiv.innerText = ''
}