const options = ["water","earth","fire","air","steel"]
const playerSelects = document.getElementById('playerSelects')
const computerSelects = document.getElementById('computerSelects')

function gameManager(playerChoice){
    setPicture(playerChoice);

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
    const questionmark = document.getElementById('questionmark')
    const water = document.getElementById('water')
    const fire = document.getElementById('fire')
    const earth = document.getElementById('earth')
    const air = document.getElementById('air')
    const steel = document.getElementById('steel')

    console.log(playerChoice)
    
    if(playerChoice === 'water'){
        water.classList.remove('inactive')
        water.classList.add('active')
        questionmark.classList.remove('active')
        questionmark.classList.add('inactive')
    }else if(playerChoice === 'fire'){
        fire.classList.remove('inactive')
        fire.classList.add('active')
        questionmark.classList.remove('active')
        questionmark.classList.add('inactive')
    }else if(playerChoice === 'earth'){
        earth.classList.remove('inactive')
        earth.classList.add('active')
        questionmark.classList.remove('active')
        questionmark.classList.add('inactive')
    }else if(playerChoice === 'air'){
        air.classList.remove('inactive')
        air.classList.add('active')
        questionmark.classList.remove('active')
        questionmark.classList.add('inactive')
    }else if(playerChoice === 'steel'){
        steel.classList.remove('inactive')
        steel.classList.add('active')
        questionmark.classList.remove('active')
        questionmark.classList.add('inactive')
    }
    
    
}
