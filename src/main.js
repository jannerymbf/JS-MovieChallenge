const apiKey = 'e76bd81';

export async function gettingMovies(movieTitle) {
  const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&page=1&apikey=${apiKey}`);
  const data = await response.json();
  return data; // this returns an array of ten movies
}

export async function showMovie(id) {
  const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
  const movieData = await response.json();
  return movieData; //this returns an object with info of the movie
}