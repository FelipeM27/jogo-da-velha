let s = document.querySelectorAll(".squares")
let resetButton = document.querySelector("button")
let warnning = document.querySelector("#warning")
let player = 'X'
let game = true
let itemCount = 0

warning(`Jogador: ${player}`)

//Events
s.forEach(item=>{item.addEventListener('click', itemClick)})
resetButton.addEventListener('click', reset)

//Functions
function itemClick(event) {
    item = event.target
    if(item.innerText === '' && game === true){
        item.innerText = player
        itemCount += 1
        checkGame(item)
    }
}

function reset() {
    game = true
    itemCount = 0
    switchPlayer()
    s.forEach(item=>{
        item.innerText = ''
        item.classList.remove("won")
    })
    resetButton.style.opacity='0'
}

function switchPlayer() {
    player = (player === 'X') ? 'O' : 'X'
    warning(`Jogador: ${player}`)
}

function warning(msg) {
    warnning.innerText = msg
}

function checkGame(item) {
    checkWinner()
    if(item.classList.contains("won")){
        game = false
        itemCount = 0
        resetButton.style.opacity='100'
        warning(`Jogador: ${player} venceu!`)
    }else{
        switchPlayer()
    }
    if(itemCount === 9){
        s.forEach(item=>{item.classList.add("won")})
        resetButton.style.opacity='100'
        warning(`Deu empate!`)
        
    }
}

function checkWinner() {
    if(s[0].textContent === player && s[1].textContent === player && s[2].textContent === player){
        s[0].classList.add("won")
        s[1].classList.add("won")
        s[2].classList.add("won")
    }
    if(s[3].textContent === player && s[4].textContent === player && s[5].textContent === player){
        s[3].classList.add("won")
        s[4].classList.add("won")
        s[5].classList.add("won")
    }
    if(s[6].textContent === player && s[7].textContent === player && s[8].textContent === player){
        s[6].classList.add("won")
        s[7].classList.add("won")
        s[8].classList.add("won")
    }

    if(s[0].textContent === player && s[3].textContent === player && s[6].textContent === player){
        s[0].classList.add("won")
        s[3].classList.add("won")
        s[6].classList.add("won")
    }
    if(s[1].textContent === player && s[4].textContent === player && s[7].textContent === player){
        s[1].classList.add("won")
        s[4].classList.add("won")
        s[7].classList.add("won")
    }
    if(s[2].textContent === player && s[5].textContent === player && s[8].textContent === player){
        s[2].classList.add("won")
        s[5].classList.add("won")
        s[8].classList.add("won")
    }

    if(s[0].textContent === player && s[4].textContent === player && s[8].textContent === player){
        s[0].classList.add("won")
        s[4].classList.add("won")
        s[8].classList.add("won")
    }
    if(s[2].textContent === player && s[4].textContent === player && s[6].textContent === player){
        s[2].classList.add("won")
        s[4].classList.add("won")
        s[6].classList.add("won")
    } 
}