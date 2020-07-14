const PIEDRA = 1
const PAPEL = 2
const TIJERAS = 3

var opcion1 = 0
var opcion2 = 0

const gameButton = document.getElementById('gameButton')
const Button = document.getElementById('player1_rock')
const electionP1 = document.getElementById('player1-election')
const electionP2 = document.getElementById('player2-election')
const gameResult = document.getElementById('game_result')

gameButton.addEventListener('click', empezarJuego)

function empezarJuego() {
    habilitarPlayer(1)
    gameButton.classList.add('started')
    gameButton.removeEventListener('click', empezarJuego)
    gameButton.textContent = 'Turno del jugador 1'
    gameResult.textContent = '...'
    borrarElecciones()
}

function habilitarPlayer(num) {
    let locker = document.getElementById(`lockerPlayer${num}`)
    locker.classList.add('unlock')
}

function deshabilitarPlayer(num) {
    let locker = document.getElementById(`lockerPlayer${num}`)
    locker.classList.remove('unlock')
}

const opcionPlayer1 = opcion => {
    opcion1 = opcion
    deshabilitarPlayer(1)
    habilitarPlayer(2)
    gameButton.textContent = 'Turno del jugador 2'
}

const opcionPlayer2 = opcion => {
    opcion2 = opcion
    deshabilitarPlayer(2)
    mostrarElecciones()
    obtenerResultado()
    gameButton.classList.remove('started')
    gameButton.addEventListener('click', empezarJuego)
    gameButton.textContent = 'Empezar el juego'
}

function mostrarElecciones() {
    switch (opcion1) {
        case PIEDRA:
            electionP1.innerHTML = `<i class="fas fa-hand-rock"></i>`
            break
        case PAPEL:
            electionP1.innerHTML = `<i class="fas fa-hand-paper"></i>`
            break
        case TIJERAS:
            electionP1.innerHTML = `<i class="fas fa-hand-scissors"></i>`
            break
        default:
            console.log("El jugador 1 no eligió una opción válida")
    }
    switch (opcion2) {
        case PIEDRA:
            electionP2.innerHTML = `<i class="fas fa-hand-rock"></i>`
            break
        case PAPEL:
            electionP2.innerHTML = `<i class="fas fa-hand-paper"></i>`
            break
        case TIJERAS:
            electionP2.innerHTML = `<i class="fas fa-hand-scissors"></i>`
            break
        default:
            console.log("El jugador 2 no eligió una opción válida")
    }
}

function borrarElecciones() {
    electionP1.innerHTML = `<i class="fas fa-ellipsis-h"></i>`
    electionP2.innerHTML = `<i class="fas fa-ellipsis-h"></i>`
}

function obtenerResultado() {
    switch (opcion1) {
        case PIEDRA:
            switch (opcion2) {
                case PIEDRA:
                    gameResult.textContent = "Empate"
                    break
                case PAPEL:
                    gameResult.textContent = "Gana el jugador 2"
                    break
                case TIJERAS:
                    gameResult.textContent = "Gana el jugador 1"
                    break
                default:
                    gameResult.textContent = "El jugador 2 no eligió una opción válida"
                    break
            }
            break
        case PAPEL:
            switch (opcion2) {
                case PIEDRA:
                    gameResult.textContent = "Gana el jugador 1"
                    break
                case PAPEL:
                    gameResult.textContent = "Empate"
                    break
                case TIJERAS:
                    gameResult.textContent = "Gana el jugador 2"
                    break
                default:
                    gameResult.textContent = "El jugador 2 no eligió una opción válida"
                    break
            }
            break
        case TIJERAS:
            switch (opcion2) {
                case PIEDRA:
                    gameResult.textContent = "Gana el jugador 2"
                    break
                case PAPEL:
                    gameResult.textContent = "Gana el jugador 1"
                    break
                case TIJERAS:
                    gameResult.textContent = "Empate"
                    break
                default:
                    gameResult.textContent = "El jugador 2 no eligió una opción válida"
                    break
            }
            break
        default:
            gameResult.textContent = "El jugador 1 no eligió una opción válida"
            break
    }
}