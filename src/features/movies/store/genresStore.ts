import { create } from 'zustand';

export type Genre = {
  id: number;
  name: string;
};

type GenresState = {
  genres: Record<number, string>;
  setGenres: (genres: Genre[]) => void;
};

export const useGenresStore = create<GenresState>((set) => ({
  genres: {},

  setGenres: (genres) => {
    const map = genres.reduce<Record<number, string>>((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
    set({ genres: map });
  },
}));
