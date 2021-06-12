/*Carne - 400 gr por pessoa + de 6 horas - 650
Cerveja - 1200ml pessoal + de 6 horas - 2000ml
Refrigerante/agua - 1000ml pessoal + de 6 horas - 1500ml
Crianca vale por 0,5.                                 */

let calcButton = document.getElementById("calcButton");
let kids = document.getElementById("numberOfKids");
let adults = document.getElementById("numberOfAdults");
let duration = document.getElementById("duration");

function calc(){
    let inputKidsNumber = kids.value;
    let inputAdultsNumber = adults.value;
    let inputDuration = duration.value;

    if (inputAdultsNumber && inputKidsNumber && inputDuration){
        console.log("IF")
    }
    else{
        alert("Do not leave any box empty ;)")
    } 
}

calcButton.addEventListener("click", calc)
