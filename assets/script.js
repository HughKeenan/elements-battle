const options = ["water","earth","fire","air","steel"]
const choices = ["hydro","terra","pyro","aero","iron"]
const playerSelects = document.getElementById('playerSelects')
const computerSelects = document.getElementById('computerSelects')
const questionmark = document.getElementById('questionmark')
const query = document.getElementById('query')
const water = document.getElementById('water')
const hydro = document.getElementById('hydro')
const fire = document.getElementById('fire')
const pyro = document.getElementById('pyro')
const earth = document.getElementById('earth')
const terra = document.getElementById('terra')
const air = document.getElementById('air')
const aero = document.getElementById('aero')
const steel = document.getElementById('steel')
const iron = document.getElementById('iron')

function gameManager(playerChoice){
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

    let computerSelects = options[Math.floor(Math.random()*5)]
    setPicture(computerSelects);
    console.log(computerSelects)
    if (playerChoice === computerSelects){
        console.log("It's a draw!")
    }else{
    switch (playerChoice){
        case 'water':
            result = (computerSelects === 'fire' || computerSelects === 'steel') ? console.log('You Win!') : console.log('You Lose!');
            break;
        case 'fire':
            result = (computerSelects === 'air' || computerSelects === 'steel') ? console.log('You Win!') : console.log('You Lose!');
            break;
        case 'earth':
            result = (computerSelects === 'water' || computerSelects === 'fire') ? console.log('You Win!') : console.log('You Lose!');
            break;
        case 'air':
            result = (computerSelects === 'water' || computerSelects === 'earth') ? console.log('You Win!') : console.log('You Lose!');
            break;
        case 'steel':
        result = (computerSelects === 'air' || computerSelects === 'earth') ? console.log('You Win!') : console.log('You Lose!');
            break;  
    }
}
}
function setPicture(){
   let computerChoice = choices[Math.floor(Math.random()*5)]
   if (computerChoice === 'hydro'){
    hydro.classList.remove('inactive')
    hydro.classList.add('active')
    query.classList.remove('active')
    query.classList.add('inactive')
   }else if (computerChoice === 'pyro'){
    pyro.classList.remove('inactive')
    pyro.classList.add('active')
    query.classList.remove('active')
    query.classList.add('inactive')
   }else if (computerChoice === 'terra'){
    terra.classList.remove('inactive')
    terra.classList.add('active')
    query.classList.remove('active')
    query.classList.add('inactive')
   }else if (computerChoice === 'aero'){
    aero.classList.remove('inactive')
    aero.classList.add('active')
    query.classList.remove('active')
    query.classList.add('inactive')
   }else if (computerChoice === 'iron'){
    iron.classList.remove('inactive')
    iron.classList.add('active')
    query.classList.remove('active')
    query.classList.add('inactive')
   }
}
