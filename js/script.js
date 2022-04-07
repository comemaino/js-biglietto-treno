const tripKms = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const defaultPrice = tripKms * 0.21;

let finalPrice;

if (userAge < 18) {
	finalPrice = defaultPrice * 0.8;
} else if (userAge > 65) {
	finalPrice = defaultPrice * 0.6;
} else {
	finalPrice = defaultPrice;
}

document.getElementById("ticket-price").innerHTML = finalPrice.toFixed(2);
