import { httpClient } from '@services/httpClient';
import { TMDB_CONFIG } from '@config/tmdb';

export const moviesApi = {
  fetchPopularMovies: async () => {
    const response = await httpClient.get(TMDB_CONFIG.ENDPOINTS.popularMovies);

    return response.data;
  },

  fetchMovieDetails: async (movieId: number) => {
    const response = await httpClient.get(TMDB_CONFIG.ENDPOINTS.movieDetails(movieId));

    return response.data;
  },

  fetchNowPlayingMovies: async () => {
    const response = await httpClient.get(TMDB_CONFIG.ENDPOINTS.nowPlayingMovies);
    return response.data;
  },

  fetchGenres: async () => {
    const response = await httpClient.get('/genre/movie/list');
    return response.data.genres;
  },
};
