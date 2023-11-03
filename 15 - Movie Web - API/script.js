// Establece la dirección web para obtener una lista de películas populares.
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

// Establece la dirección web para encontrar las imágenes de las películas.
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// Establece la dirección web para buscar películas por su nombre.
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// Obtiene el elemento HTML con el id 'main' y lo almacena en la variable 'main'.
const main = document.getElementById('main')

// Obtiene el elemento HTML con el id 'form' y lo almacena en la variable 'form'.
const form = document.getElementById('form')

// Obtiene el elemento HTML con el id 'search' y lo almacena en la variable 'search'.
const search = document.getElementById('search') 

// Llama a la función 'getMovies' con la dirección web 'API_URL' para obtener películas populares.
getMovies(API_URL)

// Declara una función asincrónica llamada 'getMovies' que toma una dirección web como parámetro.
async function getMovies(url) {
    // Realiza una solicitud a la dirección web y espera a que se obtenga la respuesta.
    const res = await fetch(url)

    // Convierte la respuesta en formato JSON y espera a que se complete.
    const data = await res.json()

    // Llama a la función 'showMovies' con los resultados de la solicitud.
    showMovies(data.results)
}

// Declara una función llamada 'showMovies' que toma un arreglo de películas como parámetro.
function showMovies(movies) {
    // Borra todo el contenido dentro del elemento HTML con id 'main'.
    main.innerHTML = ''

    // Itera a través de cada película en el arreglo.
    movies.forEach((movie) => {
        // Desestructura las propiedades de la película, como título, imagen, puntuación y descripción.
        const { title, poster_path, vote_average, overview } = movie

        // Crea un nuevo elemento HTML 'div' para representar la película.
        const movieEl = document.createElement('div')
        // Añade una clase CSS llamada 'movie' al elemento 'div'.
        movieEl.classList.add('movie')

        // Rellena el contenido del elemento 'div' con información de la película.
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        // Agrega el elemento 'div' al elemento HTML con id 'main'.
        main.appendChild(movieEl)
    })
}

// Declara una función llamada 'getClassByRate' que toma una puntuación como parámetro.
function getClassByRate(vote) {
    // Determina el color basado en la puntuación de la película y devuelve una clase CSS.
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

// Agrega un 'event listener' al formulario para escuchar el evento 'submit'.
form.addEventListener('submit', (e) => {
    e.preventDefault() // Evita que el formulario se envíe de forma tradicional.

    // Obtiene el valor ingresado en el campo de búsqueda.
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        // Si se ingresó un término de búsqueda, llama a 'getMovies' con la dirección web de búsqueda.
        getMovies(SEARCH_API + searchTerm)

        // Limpia el campo de búsqueda después de la búsqueda.
        search.value = ''
    } else {
        // Si no se ingresó nada, recarga la página para mostrar las películas populares nuevamente.
        window.location.reload()
    }
})
