import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import { movieQueryKeys } from '../api/queries';
import type { Movie } from '../types/movie';

type PopularMoviesResponse = {
    results: Movie[];
};

export const usePopularMovies = () => {
    return useQuery<PopularMoviesResponse>({
        queryKey: movieQueryKeys.popular(),
        queryFn: moviesApi.fetchPopularMovies,
    });
};
