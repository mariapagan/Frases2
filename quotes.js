const quotes = [
    {
    name: "Mayra Santos Febres",
    quote: "Quiero que se sepa, tomen nota. Podemos, entre todaslevantar lo caído,parirnos una isla nueva.",
    image: "mayrasantos"
    },
    {
    name: "Juan Antonio Corretjer",
    quote: "Y yo soy puertorriqueño sin na'...pero sin quebranto.",
    image: "juanantonio"
    },
    {
        name: "Luisa Capetillo",
        quote: "La tormenta es poderosa, y yo la he desafiado. El abismo es tenebroso, y yo no lo he temido. El mar es peligroso y yo lo he cruzado",
        image: "Luisa"
     },
     {
        name: "Isabelita Rosado",
        quote: "Ponte de pie que al enemigo no se le espera de rodillas",
        image: "isabelita"
     },
     {
        name: "Julia de Burgos",
        quote: "La mente es una intérprete que traduce la fuerza en ideas que avanzan.",
        image: "isabelita"
     }, 
     {
        name: "Sonia Sotomayor",
        quote: "No había ninguna persona de padres puertorriqueños, de bisabuelos puertorriqueños, que en ese momento [del huracán] no encontró su raza.",
        image: "SoniaSotomayor"
     }, 
     {
        name: "Minerva Mirabal",
        quote: "Si me matan yo sacaré mis brazos de la tumba y seré mas fuerte",
        image: "Minerva"
     },  
     {
        name: "Eugenio Maria de Hostos",
        quote: "El deber es el freno de la conciencia... sin él, la conciencia se desboca.",
        image: "Eugenio"
     },  
     {
        name: "Juan Bosch",
        quote: "Nadie se muere de verdad, si queda en el mundo quien respete su memoria.",
        image: "juanbosch"
     }  
];
const quoteBtn = document.querySelector("#quoteBtn");
const quoteTxt = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quoteImage = document.querySelector("#quoeteImage");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}