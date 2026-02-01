import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Movie } from '@features/movies/types/movie';

const WATCHLIST_STORAGE_KEY = '@watchlist';

export const watchlistStorage = {
    async get(): Promise<Movie[]> {
        try {
            const raw = await AsyncStorage.getItem(WATCHLIST_STORAGE_KEY);

            if (!raw) {
                return [];
            }

            return JSON.parse(raw) as Movie[];
        } catch (error) {
            console.warn('Failed to load watchlist from storage', error);
            return [];
        }
    },

    async set(movies: Movie[]): Promise<void> {
        try {
            await AsyncStorage.setItem(
                WATCHLIST_STORAGE_KEY,
                JSON.stringify(movies),
            );
        } catch (error) {
            console.warn('Failed to save watchlist to storage', error);
        }
    },

    async clear(): Promise<void> {
        try {
            await AsyncStorage.removeItem(WATCHLIST_STORAGE_KEY);
        } catch (error) {
            console.warn('Failed to clear watchlist storage', error);
        }
    },
};