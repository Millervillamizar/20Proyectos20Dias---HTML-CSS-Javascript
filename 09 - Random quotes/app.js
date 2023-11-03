document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("text");
    const quoteAuthor = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote");
    const tweetQuote = document.getElementById("tweet-quote");

    // Array de ejemplos de frases (puedes agregar más)
    const quotes = [
        {
    text: "El secreto para avanzar es empezar.",
    author: "Mark Twain"
},
{
    text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon"
},
{
    text: "La única forma de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs"
},
{
    text: "La mente es como un paracaídas, solo funciona si está abierta.",
    author: "Albert Einstein"
},
{
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    author: "Robert Collier"
},
{
    text: "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
    author: "Jack Canfield"
},
{
    text: "El momento en que crees que has aprendido todo, es cuando realmente comienzas a aprender.",
    author: "Tom Hopkins"
},
{
    text: "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
    author: "Charles R. Swindoll"
},
{
    text: "El éxito es la capacidad de ir de un fracaso a otro sin perder entusiasmo.",
    author: "Winston Churchill"
},


    ];

    // Función para obtener una frase aleatoria
    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Función para mostrar una nueva frase
    function displayNewQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        
        // Actualiza el enlace de Tweet
        tweetQuote.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(randomQuote.text)}" -${encodeURIComponent(randomQuote.author)}`;
    }

    // Cargar una frase aleatoria al cargar la página
    displayNewQuote();

    // Manejar clic en el botón "Nueva Frase"
    newQuoteBtn.addEventListener("click", displayNewQuote);
});
