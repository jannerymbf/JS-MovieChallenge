const apiKey = 'e76bd81';

export async function gettingMovies(movieTitle) {
  const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&page=1&apikey=${apiKey}`);
  const data = await response.json();
  return data; // this returns an array of ten movies
}