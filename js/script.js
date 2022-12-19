// Inizializzo e dichiaro le variabii
const kmPrice = 0.21;
const minorsDiscount = 0.2;
const elderyDiscount = 0.4;
let ticketPrice;

// Richiesta km da percorrere
const kmRange = prompt("Quanti km vuoi percorrere?");
console.log(kmRange);

// Richiesta eta' utente
const userAge = prompt("Quanti anni hai?");
console.log(userAge);

// Calcolo il prezzo del biglietto

// Prezzo minori 18
if (userAge < 18) {

    ticketPrice = ((kmPrice * kmRange) - (kmPrice * kmRange) * minorsDiscount);
    ticketPrice = ticketPrice.toFixed(2);
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
