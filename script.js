const gameScreen = document.getElementById('gameScreen')
const startGameButton = document.getElementById('startGameButton')

startGameButton.addEventListener("click", startGame)

function startGame() { // startGameButton function
  this.style.display = "none"
  gameScreen.style.display = 'flex'
}

