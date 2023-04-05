import { gettingMovies, showMovie } from "./main.js";

const input = document.getElementById('movie-title');
const btn = document.getElementById('search-btn');
const moviesContainer = document.getElementById('movies-container');
const totalResults = document.getElementById('total-results');
const movieShowcase = document.getElementById('movie-showcase');

btn.addEventListener('click', () => {
  let template = '';
  gettingMovies(input.value)
    .then(response => {
      totalResults.innerHTML = `${response.totalResults} results for ${input.value}`;
      response.Search.forEach(element => {
        template +=
          `<a href="#${element.imdbID}">
            <article class="${element.imdbID}">
              <img class="${element.imdbID}" width=100 src="${element.Poster}" alt="${element.Title}">
              <div class="${element.imdbID}">
                <p class="${element.imdbID}">${element.Title}</p>
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
});

moviesContainer.addEventListener('click', (event) => {
  let template = '';
  showMovie(event.target.className)
    .then(response => {
      template +=
      `<div id=${response.imdbID}>
        <img src="${response.Poster}" width=100 alt="movie poster">
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
        </table>
      </div>`
      movieShowcase.innerHTML = template;
    })
})






