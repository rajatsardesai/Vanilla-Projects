/* Code to fetch movie details */

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector('#movie-box');
const searchMovie = document.querySelector('#search');

// Function to fetch movies
const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data);
};

// Init call
getMovies(APIURL);

// Function to show movies
const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.results.forEach((result) => {
        const imagePath = result.poster_path === null ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" : IMGPATH + result.poster_path;
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <div class="card h-100">
            <img src="${imagePath}" class="card-img-top" alt="${result.original_title}">
            <div class="card-body">
                <h5 class="card-title">${result.original_title}</h5>
                <p class="card-text">${result.overview}</p>
            </div>
        </div>`;
        movieBox.appendChild(box);
    });
};

// Call getmovies function on search
searchMovie.addEventListener('keyup', (e) => {
    if (e.target.value != "") {
        getMovies(SEARCHAPI + e.target.value);
    } else {
        getMovies(APIURL)
    }
});