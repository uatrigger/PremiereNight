export const movieQueryKeys = {
  all: ['movies'] as const,

  popular: () => [...movieQueryKeys.all, 'popular'] as const,

  details: (movieId: number) => [...movieQueryKeys.all, 'details', movieId] as const,

  nowPlaying: () => [...movieQueryKeys.all, 'now-playing'] as const,

  genres: () => [...movieQueryKeys.all, 'genres'] as const,
};
