import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { usePopularMovies } from '../hooks/usePopularMovies';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { MovieCarousel } from '../components/MovieCarousel';
import { Loader, Section, ScrollableScreenLayout } from '@shared/components';
import { useGenres } from '../hooks/useGenres';
import { useGenresStore } from '../store/genresStore';
import { spacing } from '@shared/theme/spacing';

import type { HomeStackParamList } from '@app/navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
    const popular = usePopularMovies();
    const nowPlaying = useNowPlayingMovies();
    const { data: genres } = useGenres();
    const setGenres = useGenresStore((s) => s.setGenres);

    const fromApp = true;

    useEffect(() => {
        if (genres) {
            setGenres(genres);
        }
    }, [genres, setGenres]);

    if (popular.isLoading || nowPlaying.isLoading) {
        return <Loader />;
    }

    if (!popular.data || !nowPlaying.data) {
        return <Text>Error loading movies</Text>;
    }

    return (
        <ScrollableScreenLayout>
            <View style={styles.contaner}>
                <Section title='Popular'>
                    <MovieCarousel
                        movies={popular.data.results}
                        onMoviePress={(movieId) =>
                            navigation.navigate('MovieDetail', { movieId, fromApp })
                        }
                    />
                </Section>
                <Section title='Now Playing'>
                    <MovieCarousel
                        movies={nowPlaying.data.results}
                        onMoviePress={(movieId) =>
                            navigation.navigate('MovieDetail', { movieId, fromApp })
                        }
                    />
                </Section>

                {/* this list is to chwck if scroll works as expected */}
                <Section title='Last unrated'>
                    <MovieCarousel
                        movies={nowPlaying.data.results}
                        onMoviePress={(movieId) =>
                            navigation.navigate('MovieDetail', { movieId, fromApp })
                        }
                    />
                </Section>
            </View>
        </ScrollableScreenLayout>
    );
};

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        paddingLeft: spacing.m,
        gap: spacing.l 
    }
});