import * as FUNCTIONS from "./module/functions.js"
import * as INSTANCES from "./module/instances.js"

INSTANCES.start.addEventListener("click",()=>{
    document.querySelector('audio').src = "./src/audio/menuSong.mp3"
    INSTANCES.start.remove()
    INSTANCES.menu.remove()
    let bottom = document.createElement("div")
    bottom.id = "containerB"
    INSTANCES.center.appendChild(bottom)
    let left = document.createElement("div")
    let right = document.createElement("div")
    bottom.appendChild(left)
    bottom.appendChild(right)
    left.id = "left"
    right.id = "right"
    let dialgatxt = document.createElement("p")
    let palkiatxt = document.createElement("p")
    let dialga = document.createElement("img")
    let palkia = document.createElement("img")
    dialgatxt.innerText = "DIALGA"
    palkiatxt.innerText = "PALKIA"
    left.appendChild(dialgatxt)
    left.appendChild(dialga)
    right.appendChild(palkiatxt)
    right.appendChild(palkia)
    dialga.src = "./src/img/dialga.gif"
    palkia.src = "./src/img/palkia.gif"
    INSTANCES.topmenu.src = "./src/img/choose.png"
    INSTANCES.topmenu.id = "choose"
    dialga.addEventListener("click",()=>{
        document.querySelector("audio").src = "./src/audio/fightTheme.mp3"
        FUNCTIONS.cris(INSTANCES.crisDialga)
        setTimeout(() => {
            left.remove()
            right.remove()
            INSTANCES.topmenu.remove()
            let topdiv = document.createElement("div")
            topdiv.id = "fight"
            INSTANCES.center.insertBefore(topdiv,bottom)
            let poke1 = document.createElement("div")
            poke1.id = "poke1"
            let poke2 = document.createElement("div")
            poke2.id = "poke2"
            topdiv.appendChild(poke2)
            topdiv.appendChild(poke1)
            dialga.remove()
            poke2.appendChild(dialga)
            dialga.src = "./src/img/dialgaBack.gif"
            dialgatxt.remove()
            palkia.remove()
            poke1.appendChild(palkia)
            palkiatxt.remove()
            bottom.id = "container"
            let attackzone = document.createElement("div")
            let textzone = document.createElement("p")
            for (let index = 0; index < 4; index++) {
                let btnattack = document.createElement("button")
                attackzone.appendChild(btnattack)
            }
            bottom.appendChild(attackzone)
            bottom.appendChild(textzone)
            let allbtn = document.querySelectorAll("button")
            allbtn[0].innerText = "Griffes Acier"
            allbtn[1].innerText = "Vivacité"
            allbtn[2].innerText = "Queue De Fer"
            allbtn[3].innerText = "Hurle Temps"
            let attaquePalkia
            allbtn.forEach(element => {
                element.addEventListener("click",()=>{
                    switch (element.innerText) {
                        case "Griffes Acier":
                            INSTANCES.dialga.griffesAcier()
                            INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                            document.querySelector("p").innerText = `Dialga attaque avec Vibraqua il reste ${INSTANCES.palkia.pointVie}PV à Palkia`
                            element.disabled = true
                            break;

                        case "Vivacité":
                            INSTANCES.dialga.vivacité()
                            document.querySelector("p").innerText = `Dialga utilise vivacité il récupère 40PV il lui reste ${INSTANCES.dialga.pointVie}PV`
                            break;

                        case "Queue De Fer":
                            INSTANCES.dialga.queueDeFer()
                            INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                            document.querySelector("p").innerText = `Dialga attaque avec Queue De Fer il reste ${INSTANCES.palkia.pointVie}PV à Palkia`
                            break;

                        case "Hurle Temps":
                            INSTANCES.palkia.hydroCanon()
                            INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                            document.querySelector("p").innerText = `Dialga attaque avec Hurle Temps il reste ${INSTANCES.palkia.pointVie}PV à Palkia`
                            break;
                    
                        default:
                            break;
                    }
                    allbtn.forEach(element => {
                        element.disabled = true
                    });
                    if (INSTANCES.palkia.pointVie <= 0) {
                        document.querySelector("p").innerText = `PALKIA EST MORT. VOUS AVEZ REMPORTÉ LE COMBAT`
                        palkia.remove()
                    }else{
                        setTimeout(() => {
                            attaquePalkia = FUNCTIONS.getRandomInt(4)
                            switch (attaquePalkia) {
                                case 0:
                                    INSTANCES.palkia.vibraqua()
                                    INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                    document.querySelector("p").innerText = `Palkia attaque avec Vibraqua il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                    break;
                                case 1:
                                    INSTANCES.palkia.tranche()
                                    INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                    document.querySelector("p").innerText = `Palkia utilise Tranche il récupere 20PV et attaque Dialga,il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                    break;
                                case 2:
                                    INSTANCES.palkia.rayonGemme()
                                    INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                                    document.querySelector("p").innerText = `Palkia attaque avec Rayon Gemme il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                    break;
                                case 3:
                                    INSTANCES.palkia.hydroCanon()
                                    INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                    document.querySelector("p").innerText = `Palkia attaque avec Hydro canon il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                    break;
                                
                                default:
                                    break;
                        }
                        allbtn.forEach(element => {
                            element.disabled = false
                        });
                        if (INSTANCES.dialga.pointVie <= 0) {
                            allbtn.forEach(element => {
                                element.disabled = true
                            });
                            dialga.remove()
                            document.querySelector("p").innerText = `DIALGA EST MORT. VOUS AVEZ PERDU LE COMBAT`
                        }
                        }, 2000);
                    }
                })
            });
        }, 1000);
    })

    palkia.addEventListener("click",()=>{
        FUNCTIONS.cris(INSTANCES.crisPalkia)
        document.querySelector("audio").src = "./src/audio/fightTheme.mp3"
        setTimeout(() => {
            left.remove()
            right.remove()
            INSTANCES.topmenu.remove()
            let topdiv = document.createElement("div")
            topdiv.id = "fight"
            INSTANCES.center.insertBefore(topdiv,bottom)
            let poke1 = document.createElement("div")
            poke1.id = "poke1"
            let poke2 = document.createElement("div")
            poke2.id = "poke2"
            topdiv.appendChild(poke2)
            topdiv.appendChild(poke1)
            dialga.remove()
            poke2.appendChild(palkia)
            palkia.src = "./src/img/palkiaBack.gif"
            dialgatxt.remove()
            poke1.appendChild(dialga)
            palkiatxt.remove()
            bottom.id = "container"
            let attackzone = document.createElement("div")
            let textzone = document.createElement("p")
            for (let index = 0; index < 4; index++) {
                let btnattack = document.createElement("button")
                attackzone.appendChild(btnattack)
            }
            bottom.appendChild(attackzone)
            bottom.appendChild(textzone)
            let allbtn = document.querySelectorAll("button")
            allbtn[0].innerText = "Vibraqua"
            allbtn[1].innerText = "Tranche"
            allbtn[2].innerText = "Rayon Gemme"
            allbtn[3].innerText = "Hydro Canon"
            let attaqueDialga
            allbtn.forEach(element => {
                element.addEventListener("click",()=>{
                        switch (element.innerText) {
                            case "Vibraqua":
                                INSTANCES.palkia.vibraqua()
                                INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                document.querySelector("p").innerText = `Palkia attaque avec Vibraqua il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                break;
    
                            case "Tranche":
                                INSTANCES.palkia.tranche()
                                INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                document.querySelector("p").innerText = `Palkia utilise Tranche il récupere 20PV et attaque Dialga,il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                break;
                            case "Rayon Gemme":
                                INSTANCES.palkia.rayonGemme()
                                INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                document.querySelector("p").innerText = `Palkia attaque avec Rayon Gemme il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                break;
                            case "Hydro Canon":
                                INSTANCES.palkia.hydroCanon()
                                INSTANCES.dialga.pointVie -= INSTANCES.palkia.pointAttaque
                                document.querySelector("p").innerText = `Palkia attaque avec Hydro canon il reste ${INSTANCES.dialga.pointVie}PV à Dialga`
                                break;
                        
                            default:
                                break;
                        }
                        allbtn.forEach(element => {
                            element.disabled = true
                        });
                        if (INSTANCES.dialga.pointVie <= 0) {
                            dialga.remove()
                            document.querySelector("p").innerText = `DIALGA EST MORT. VOUS AVEZ REMPORTÉ LE COMBAT`
                        }else{
                            setTimeout(() => {
                                attaqueDialga = FUNCTIONS.getRandomInt(4)
                                switch (attaqueDialga) {
                                    case 0:
                                        INSTANCES.dialga.griffesAcier()
                                        INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                                        document.querySelector("p").innerText = `Dialga attaque avec Griffes Acier il reste ${INSTANCES.palkia.pointVie}PV à Palkia`
                                        break;
                                    case 1:
                                        INSTANCES.dialga.vivacité()
                                        INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                                        document.querySelector("p").innerText = `Dialga utilise Vivacité il recupere 40PV il lui reste  ${INSTANCES.dialga.pointVie}PV`
                                        break;
                                    case 2:
                                        INSTANCES.dialga.queueDeFer()
                                        INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                                        document.querySelector("p").innerText = `Dialga attaque avec Queue De Fer il reste ${INSTANCES.palkia.pointVie}PV à Palkia `
                                        break;
                                    case 3:
                                        INSTANCES.dialga.hurleTemps()
                                        INSTANCES.palkia.pointVie -= INSTANCES.dialga.pointAttaque
                                        document.querySelector("p").innerText = `Dialga attaque avec Hurle Temps il reste ${INSTANCES.palkia.pointVie}PV à Palkia`
                                        break;
                                    
                                    default:
                                        break;
                            }
                            allbtn.forEach(element => {
                                element.disabled = false
                            });
                            if (INSTANCES.palkia.pointVie <= 0){
                                allbtn.forEach(element => {
                                    element.disabled = true
                                });
                                palkia.remove()
                                document.querySelector("p").innerText = `PALKIA EST MORT. VOUS AVEZ PERDU LE COMBAT`
                            }
                            }, 2000);                        
                    }

                })
            });
        }, 1000);
    })
})
