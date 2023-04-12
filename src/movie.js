import { gettingMovies, showMovie } from "./services.js";

const input = document.getElementById('movie-title');
const btn = document.getElementById('search-btn');
const moviesContainer = document.getElementById('movies-container');
const totalResults = document.getElementById('total-results');
const movieDescriptionSection = document.getElementById('movie-description');
const movieShowcase = document.getElementById('movie-showcase');

function loadMovies(movieTitle) {
  let template = '';
  gettingMovies(movieTitle)
    .then(response => {
      totalResults.innerHTML = `${response.totalResults} results for ${movieTitle}`;
      response.Search.forEach(element => {
        template +=
          `<a href="#movie-description">
            <article class="${element.imdbID}">
              <img class="${element.imdbID}" width=100 src="${element.Poster}" alt="${element.Title}">
              <div class="${element.imdbID} gallery__display__movies__movie-info">
                <p class="${element.imdbID} gallery__display__movies__movie-info--title">${element.Title}</p>
                <p class="${element.imdbID}">${element.Type}</p>
                <p class="${element.imdbID}">${element.Year}</p>
              </div>
            </article>
          </a>`
      });
      moviesContainer.innerHTML = template;
    })
    .catch(() => {
      moviesContainer.innerHTML = 'No movies found';
    })
}

// So we can have a full gallery when the page is first loaded
loadMovies('movie');
movieDescriptionSection.style.display = 'none';
// til here

btn.addEventListener('click', () => {
  loadMovies(input.value);
});

moviesContainer.addEventListener('click', (event) => {
  movieDescriptionSection.style.display = 'block';
  let template = '';
  showMovie(event.target.className)
    .then(response => {
      template +=
      ` <img src="${response.Poster}" width=100 alt="movie poster">
      <h3>${response.Title}</h3>
      <p>${response.Plot}</p>
      <table>
        <tr>
          <td>Country:</td>
          <td>${response.Country}</td>
        </tr>
        <tr>
          <td>Director:</td>
          <td>${response.Director}</td>
        </tr>
        <tr>
          <td>Released:</td>
          <td>${response.Released}</td>
        </tr>
        <tr>
          <td>Runtime:</td>
          <td>${response.Runtime}</td>
        </tr>
        <tr>
          <td>Year:</td>
          <td>${response.Year}</td>
        </tr>
      </table>`
      movieShowcase.innerHTML = template;
    })
});






