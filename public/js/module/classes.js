export class Pokemon {
    constructor(nom,pointAttaque,pointVie){
        this.nom = nom;
        this.pointAttaque = pointAttaque;
        this.pointVie = pointVie;
    }
}

export class Dialga extends Pokemon {
    constructor(nom,pointAttaque,pointVie){
        super(nom,pointAttaque,pointVie);
    }
    griffesAcier(){
        this.pointAttaque = 50
    }
    vivacité(){
        this.pointVie += 40
        this.pointAttaque = 0
    }
    queueDeFer(){
        this.pointAttaque = 30
    }
    hurleTemps(){
        this.pointAttaque = 70
    }
}

export class Palkia extends Pokemon {
    constructor(nom,pointAttaque,pointVie){
        super(nom,pointAttaque,pointVie);

    }
    vibraqua(){
        this.pointAttaque = 40
    }
    tranche(){
        this.pointVie += 20
        this.pointAttaque = 20
    }
    rayonGemme(){
        this.pointAttaque = 70
    }
    hydroCanon(){
        this.pointAttaque = 15
    }
}