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
            result = (computerSelects === 'fire') ? alert('You Win!') : alert('You Lose!')
            result = (computerSelects === 'steel') ? alert('You Win!') : alert('You Lose!')
        case 'fire':
            result = (computerSelects === 'air') ? alert('You Win!') : alert('You Lose!')
            result = (computerSelects === 'steel') ? alert('You Win!') : alert('You Lose!')
        case 'earth':
            result = (computerSelects === 'water') ? alert('You Win!') : alert('You Lose!')
            result = (computerSelects === 'fire') ? alert('You Win!') : alert('You Lose!')
        case 'air':
            result = (computerSelects === 'water') ? alert('You Win!') : alert('You Lose!')
            result = (computerSelects === 'earth') ? alert('You Win!') : alert('You Lose!')
        case 'steel':
        result = (computerSelects === 'air') ? alert('You Win!') : alert('You Lose!')
        result = (computerSelects === 'earth') ? alert('You Win!') : alert('You Lose!')  
    }
}
}