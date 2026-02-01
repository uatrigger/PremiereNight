export type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    backdrop_path: String;
    genres?: {
        id: number;
        name: string;
    }[];
};