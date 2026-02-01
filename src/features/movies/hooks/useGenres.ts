import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import { movieQueryKeys } from '../api/queries';

export type Genre = {
  id: number;
  name: string;
};

export const useGenres = () => {
  return useQuery<Genre[]>({
    queryKey: movieQueryKeys.genres(),
    queryFn: moviesApi.fetchGenres,
    staleTime: Infinity,
  });
};
