import { gettingMovies } from "./main.js";

const input = document.getElementById('movie-title');
const btn = document.getElementById('search-btn');
const moviesContainer = document.getElementById('movies-container');
const totalResults = document.getElementById('total-results');

btn.addEventListener('click', () => {
  let template = '';
  gettingMovies(input.value)
    .then(response => {
      totalResults.innerHTML = `${response.totalResults} results for ${input.value}`;
      response.Search.forEach(element => {
        template +=
          `<article>
            <img width=100 src="${element.Poster}" alt="${element.Title}">
            <div>
              <p>${element.Title}</p>
              <p>${element.Type}</p>
              <p>${element.Year}</p>
            </div>
          </article>`
      });
      moviesContainer.innerHTML = template;
    })
    .catch(() => {
      moviesContainer.innerHTML = 'No movies found';
    })
})