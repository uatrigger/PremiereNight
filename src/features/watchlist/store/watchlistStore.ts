import { create } from 'zustand';

import type { Movie } from '@features/movies/types/movie';
import { watchlistStorage } from '@storage/watchlistStorage';

type WatchlistState = {
  movies: Movie[];
  isHydrated: boolean;

  hydrate: () => Promise<void>;
  addMovie: (movie: Movie) => void;
  removeMovie: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
};

export const useWatchlistStore = create<WatchlistState>((set, get) => ({
  movies: [],
  isHydrated: false,

  hydrate: async () => {
    const storedMovies = await watchlistStorage.get();
    set({ movies: storedMovies, isHydrated: true });
  },

  addMovie: (movie) => {
    const { movies } = get();

    if (movies.some((m) => m.id === movie.id)) {
      return;
    }

    const updated = [...movies, movie];
    set({ movies: updated });
    watchlistStorage.set(updated);
  },

  removeMovie: (movieId) => {
    const updated = get().movies.filter((m) => m.id !== movieId);
    set({ movies: updated });
    watchlistStorage.set(updated);
  },

  isInWatchlist: (movieId) => {
    return get().movies.some((m) => m.id === movieId);
  },
}));
