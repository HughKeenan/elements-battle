const options = ["water","earth","fire","air","steel"];
const computerSelects = document.getElementById('computerSelects');
const questionmark = document.getElementById('questionmark');
const query = document.getElementById('query');
const water = document.getElementById('water');
const hydro = document.getElementById('hydro');
const fire = document.getElementById('fire');
const pyro = document.getElementById('pyro');
const earth = document.getElementById('earth');
const terra = document.getElementById('terra');
const air = document.getElementById('air');
const aero = document.getElementById('aero');
const steel = document.getElementById('steel');
const iron = document.getElementById('iron');


/**
 * Manages interactions between the options chosen by the player and the computer
 */
function gameManager(playerChoice){
    let computerSelects = options[Math.floor(Math.random()*5)];

    setPicture(computerSelects);
    
    console.log(computerSelects);
    if (playerChoice === computerSelects){
        console.log("It's a draw!");
    }else{
    switch (playerChoice){
        case 'water':
            result = (computerSelects === 'fire' || computerSelects === 'steel') ? playerScore() : computerScore();
            break;
        case 'fire':
            result = (computerSelects === 'air' || computerSelects === 'steel') ? playerScore() : computerScore();
            break;
        case 'earth':
            result = (computerSelects === 'water' || computerSelects === 'fire') ? playerScore() : computerScore();
            break;
        case 'air':
            result = (computerSelects === 'water' || computerSelects === 'earth') ? playerScore() : computerScore();
            break;
        case 'steel':
        result = (computerSelects === 'air' || computerSelects === 'earth') ? playerScore() : computerScore();
            break;  
    }
}
}

/**
 * Sets image displayed on player side of the game screen
 */
function playerPicture(playerChoice){
    if(playerChoice === 'water'){
        water.classList.remove('inactive');
        water.classList.add('active');
        questionmark.classList.remove('active');
        questionmark.classList.add('inactive');
        fire.classList.remove('active');
        fire.classList.add('inactive');
        earth.classList.remove('active');
        earth.classList.add('inactive');
        air.classList.remove('active');
        air.classList.add('inactive');
        steel.classList.remove('active');
        steel.classList.add('inactive');
    }else if(playerChoice === 'fire'){
        fire.classList.remove('inactive');
        fire.classList.add('active');
        questionmark.classList.remove('active');
        questionmark.classList.add('inactive');
        water.classList.remove('active');
        water.classList.add('inactive');
        earth.classList.remove('active');
        earth.classList.add('inactive');
        air.classList.remove('active');
        air.classList.add('inactive');
        steel.classList.remove('active');
        steel.classList.add('inactive');
    }else if(playerChoice === 'earth'){
        earth.classList.remove('inactive');
        earth.classList.add('active');
        questionmark.classList.remove('active');
        questionmark.classList.add('inactive');
        fire.classList.remove('active');
        fire.classList.add('inactive');
        water.classList.remove('active');
        water.classList.add('inactive');
        air.classList.remove('active');
        air.classList.add('inactive');
        steel.classList.remove('active');
        steel.classList.add('inactive');
    }else if(playerChoice === 'air'){
        air.classList.remove('inactive');
        air.classList.add('active');
        questionmark.classList.remove('active');
        questionmark.classList.add('inactive');
        fire.classList.remove('active');
        fire.classList.add('inactive');
        earth.classList.remove('active');
        earth.classList.add('inactive');
        water.classList.remove('active');
        water.classList.add('inactive');
        steel.classList.remove('active');
        steel.classList.add('inactive');
    }else if(playerChoice === 'steel'){
        steel.classList.remove('inactive');
        steel.classList.add('active');
        questionmark.classList.remove('active');
        questionmark.classList.add('inactive');
        fire.classList.remove('active');
        fire.classList.add('inactive');
        earth.classList.remove('active');
        earth.classList.add('inactive');
        air.classList.remove('active');
        air.classList.add('inactive');
        water.classList.remove('active');
        water.classList.add('inactive');
    }
}

/**
 * Sets image displayed on computer side of the game screen
 */
function setPicture(computerSelects){
    if (computerSelects === 'water'){
        hydro.classList.remove('inactive');
        hydro.classList.add('active');
        query.classList.remove('active');
        query.classList.add('inactive');
        pyro.classList.remove('active');
        pyro.classList.add('inactive');
        terra.classList.remove('active');
        terra.classList.add('inactive');
        aero.classList.remove('active');
        aero.classList.add('inactive');
        iron.classList.remove('active');
        iron.classList.add('inactive');
       }else if (computerSelects === 'fire'){
        pyro.classList.remove('inactive');
        pyro.classList.add('active');
        query.classList.remove('active');
        query.classList.add('inactive');
        hydro.classList.remove('active');
        hydro.classList.add('inactive');
        terra.classList.remove('active');
        terra.classList.add('inactive');
        aero.classList.remove('active');
        aero.classList.add('inactive');
        iron.classList.remove('active');
        iron.classList.add('inactive');
       }else if (computerSelects === 'earth'){
        terra.classList.remove('inactive');
        terra.classList.add('active');
        query.classList.remove('active');
        query.classList.add('inactive');
        pyro.classList.remove('active');
        pyro.classList.add('inactive');
        hydro.classList.remove('active');
        hydro.classList.add('inactive');
        aero.classList.remove('active');
        aero.classList.add('inactive');
        iron.classList.remove('active');
        iron.classList.add('inactive');
       }else if (computerSelects === 'air'){
        aero.classList.remove('inactive');
        aero.classList.add('active');
        query.classList.remove('active');
        query.classList.add('inactive');
        pyro.classList.remove('active');
        pyro.classList.add('inactive');
        terra.classList.remove('active');
        terra.classList.add('inactive');
        hydro.classList.remove('active');
        hydro.classList.add('inactive');
        iron.classList.remove('active');
        iron.classList.add('inactive');
       }else if (computerSelects === 'steel'){
        iron.classList.remove('inactive');
        iron.classList.add('active');
        query.classList.remove('active');
        query.classList.add('inactive');
        pyro.classList.remove('active');
        pyro.classList.add('inactive');
        terra.classList.remove('active');
        terra.classList.add('inactive');
        aero.classList.remove('active');
        aero.classList.add('inactive');
        hydro.classList.remove('active');
        hydro.classList.add('inactive');
       }
    
}

/**
 * Increments the "Your Score" item when the player wins a round
 */
function playerScore(){
    let priorScore = parseInt(document.getElementById('playerScore').innerHTML);
    document.getElementById('playerScore').innerHTML = ++priorScore;    
    if(priorScore === 5){
        setTimeout(() => { if(alert('Congratulations, You Win!')){
        }else window.location.reload() }, 500);
    }
    
}

/**
 * Increments the "Computer Score" item when the player loses a round
 */
function computerScore(){
    let prevScore = parseInt(document.getElementById('computerScore').innerHTML);
    document.getElementById('computerScore').innerHTML = ++prevScore;
    if(prevScore === 5){
        setTimeout(() => { if(alert('Game Over, You Lose!')){
        }else window.location.reload() }, 500);
    }   
}

