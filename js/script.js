// Inizializzo e dichiaro le variabii
const kmPrice = 0.21;
const minorsDiscount = 0.2;
const elderyDiscount = 0.4;
let ticketPrice;

// Richiesta km da percorrere
const kmRange = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(kmRange);

// Richiesta eta' utente
const userAge = parseInt(prompt("Quanti anni hai?"));  // parseInt mi trasforma la stringa in numero intero
console.log(userAge);

// Veifico che i numeri inseriti siano validi
if (isNaN(kmRange) == true || isNaN(userAge) == true) {   // isNaN mi dice se la variabile e' di tipo NaN (not a number)
    console.log("i numeri non sono validi")
}

else {
    console.log("i numeri sono validi")
    // Calcolo il prezzo del biglietto

    // Prezzo minori 18
    if (userAge < 18) {

        ticketPrice = ((kmPrice * kmRange) - (kmPrice * kmRange) * minorsDiscount);
        ticketPrice = ticketPrice.toFixed(2); //arrotondo a 2 cifre decimali
        alert(`Il prezzo del biglietto è: €${ticketPrice}`);
    }

    // Prezzo maggiori 65
    else if (userAge > 65) {

        ticketPrice = ((kmPrice * kmRange) - (kmPrice * kmRange) * elderyDiscount);
        ticketPrice = ticketPrice.toFixed(2);
        alert(`Il prezzo del biglietto è: €${ticketPrice}`);
    }    

    // Prezzo >= 18 <= 65
    else {

        ticketPrice = kmPrice * kmRange;
        ticketPrice = ticketPrice.toFixed(2);
        alert(`Il prezzo del biglietto è: €${ticketPrice}`);
    }       
}


