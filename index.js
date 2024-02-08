let homescore = 0
let guestscore = 0
let home = document.getElementById("home")
let guest = document.getElementById("guest")

home.textContent = homescore
guest.textContent = guestscore

function homeadd(score){
    homescore += score
    home.textContent = homescore
}

/* guest function */

function guestadd(score){
    guestscore += score
    guest.textContent = guestscore
}