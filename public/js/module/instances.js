import * as CLASS from "./classes.js"

export let start = document.querySelector("#buttonstart")
export let menu =  document.getElementById("menu")
export let center = document.getElementById("center")
export let topmenu = document.getElementById("start")
//audio from scream of pokemons
export let crisPalkia = new Audio("./src/audio/palkia.ogg")
export let crisDialga = new Audio("./src/audio/dialga.ogg")

//creation of pokemons
export let dialga = new CLASS.Dialga("Dialga",0,300)
export let palkia = new CLASS.Palkia("Palkia",0,350)

