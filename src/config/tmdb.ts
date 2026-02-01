import { ENV } from './env';

export const TMDB_CONFIG = {
    BASE_URL: ENV.TMDB_BASE_URL,

    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',

    IMAGE_SIZES: {
        poster: 'w500',
        backdrop: 'w780',
    },

    ENDPOINTS: {
        popularMovies: '/movie/popular',
        nowPlayingMovies: '/movie/now_playing',
        movieDetails: (movieId: number) => `/movie/${movieId}`,
    },
};
