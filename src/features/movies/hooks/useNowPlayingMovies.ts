import { useQuery } from '@tanstack/react-query';
import { moviesApi } from '../api/moviesApi';
import { movieQueryKeys } from '../api/queries';
import type { Movie } from '../types/movie';

type NowPlayingResponse = {
    results: Movie[];
};

export const useNowPlayingMovies = () => {
    return useQuery<NowPlayingResponse>({
        queryKey: movieQueryKeys.nowPlaying(),
        queryFn: moviesApi.fetchNowPlayingMovies,
    });
};
