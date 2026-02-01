import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import { movieQueryKeys } from '../api/queries';
import type { Movie } from '../types/movie';

export const useMovieDetails = (movieId: number) => {
  return useQuery<Movie>({
    queryKey: movieQueryKeys.details(movieId),
    queryFn: () => moviesApi.fetchMovieDetails(movieId),
    enabled: !!movieId,
  });
};
