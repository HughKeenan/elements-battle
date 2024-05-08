const options = ["water","earth","fire","air","steel"]
const playerSelects = document.getElementById('playerSelects')
const computerSelects = document.getElementById('computerSelects')

function gameManager(playerChoice){
    const computerSelects = options[Math.floor(Math.random()*5)]
    console.log(computerSelects)
    if (playerChoice === computerSelects){
        alert("It's a draw!")
    }else{
    switch (playerChoice){
        case 'water':
            result = (computerSelects === 'fire' || computerSelects === 'steel') ? alert('You Win!') : alert('You Lose!');
            break;
        case 'fire':
            result = (computerSelects === 'air' || computerSelects === 'steel') ? alert('You Win!') : alert('You Lose!');
            break;
        case 'earth':
            result = (computerSelects === 'water' || computerSelects === 'fire') ? alert('You Win!') : alert('You Lose!');
            break;
        case 'air':
            result = (computerSelects === 'water' || computerSelects === 'earth') ? alert('You Win!') : alert('You Lose!');
            break;
        case 'steel':
        result = (computerSelects === 'air' || computerSelects === 'earth') ? alert('You Win!') : alert('You Lose!');
            break;  
    }
}
}

function setPicture(playerChoice){
    let waterpic = document.getElementsByClassName('waterpic');
    let firepic = document.getElementsByClassName('firepic');
    let earthpic = document.getElementsByClassName('earthpic');
    let airpic = document.getElementsByClassName('airpic');
    let steelpic = document.getElementsByClassName('steelpic');
    let questionmark = document.getElementsByClassName('questionmark');

    if (playerChoice === 'water'){
        waterpic.style.display = 'block';
        questionmark.style.display = 'none';
    }
    if (computerSelects === 'water'){
        waterpic.style.display = 'block';
        questionmark.style.display = 'none';
    }
}