import { gettingMovies, showMovie } from '../src/services.js';
import fetchMock from 'jest-fetch-mock';

describe('services', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return an object of the search', () => {
    // const movieData = { data: [] };
    // fetchMock.mockResponseOnce(JSON.stringify(movieData));
    return gettingMovies('marvel')
      .then(data => expect(typeof data).toBe('object'));
  });

  it('should return an object with info of the movie', () => {
    return showMovie('0000')
      .then(data => expect(typeof data).toBe('object'));
  });

});
