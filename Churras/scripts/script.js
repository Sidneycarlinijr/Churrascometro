/*Carne - 400 gr por pessoa + de 6 horas - 650
Cerveja - 1200ml pessoa + de 6 horas - 2000ml
Refrigerante/agua - 1000ml pessoa + de 6 horas - 1500ml
Crianca vale por 0,5.                                 */

let calcButton = document.getElementById("calcButton");
let kids = document.getElementById("numberOfKids");
let adults = document.getElementById("numberOfAdults");
let duration = document.getElementById("duration");
let result = document.getElementById("result");

function calc(){
    let inputKidsNumber = kids.value;
    let inputAdultsNumber = adults.value;
    let inputDuration = duration.value;

    if (inputAdultsNumber && inputKidsNumber && inputDuration){
        let totalMeat = (meatCalc(inputDuration) * inputAdultsNumber) + ((meatCalc(inputDuration) / 2) * inputKidsNumber);
        let totalBeer = (beerCalc(inputDuration) * inputAdultsNumber);
        let totalSoda = (sodaCalc(inputDuration) * inputAdultsNumber) + ((sodaCalc(inputDuration) / 2) * inputKidsNumber);
      
        result.innerHTML = "<br><h1>You will need:</h1><br>" +
                           "<p> " + totalMeat + "g of Meat</p>" +
                           "<p> " + totalSoda + "ml of Soda/Water</p>" +
                           "<p> " + totalBeer + "ml of Beer";

    }
    else{
        alert("Do not leave any box empty ;)")
    } 
}

function meatCalc(duration){
    if (duration >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function beerCalc(duration){
    if (duration >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function sodaCalc(duration){
    if (duration >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}

calcButton.addEventListener("click", calc)