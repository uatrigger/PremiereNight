import React from 'react';
import { View, Text, ImageBackground, Platform, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { HomeStackParamList } from '@app/navigation/HomeStack';
import { Loader } from '@shared/components';
import { Button } from '@shared/components';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { useWatchlistStore } from '@features/watchlist/store/watchlistStore';
import { TMDB_CONFIG } from '@config/tmdb';

import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';
import { typography } from '@shared/theme/typography';

import { Icon } from '@shared/components/Icon';

type Props = NativeStackScreenProps<HomeStackParamList, 'MovieDetail'>;

export const MovieDetailScreen = ({ route, navigation }: Props) => {
    const { movieId, fromApp } = route.params;

    const { data, isLoading } = useMovieDetails(Number(movieId));

    const addMovie = useWatchlistStore((s) => s.addMovie);
    const removeMovie = useWatchlistStore((s) => s.removeMovie);
    const movies = useWatchlistStore((s) => s.movies);

    const handleGoBack = () => {
        if (!fromApp) {
            navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
            });
            return;
        }
        navigation.goBack()
    };

    const inWatchlist = !!data && movies.some((m) => m.id === data.id);

    if (isLoading || !data) {
        return <Loader />;
    }

    const genreNames = data?.genres?.map((i) => i.name);

    const posterUrl = data.poster_path
        ? `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.IMAGE_SIZES.poster}${data.poster_path}`
        : undefined;


    return (
        <ImageBackground
            source={{ uri: posterUrl }}
            resizeMode="cover"
            style={styles.container}>
            <View style={styles.navigation}>
                <Button onPress={handleGoBack}>
                    <Icon name="chevron-left" />
                </Button>
                <Button onPress={() => inWatchlist ? removeMovie(data.id) : addMovie(data)} >
                    <Icon name={inWatchlist ? 'star' : 'star-outline'} />
                </Button>
            </View>
            <View style={styles.content}>
                <Text style={typography.title}>{data.title}</Text>
                {genreNames?.length ? (
                    <Text style={typography.caption}>
                        {genreNames?.join(', ')}
                    </Text>
                ) : null}
                <Text style={typography.text}>{data.overview}</Text>
                <Text style={typography.caption}>Release: {data.release_date}</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: spacing.xl,
    },
    subContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: spacing.xl,
    },
    navigation: {
        alignItems: 'flex-start',
        paddingHorizontal: spacing.m,
        paddingVertical: Platform.OS === 'ios' ? spacing.l : 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        alignItems: 'flex-start',
        padding: spacing.xl,
        justifyContent: 'flex-start',
        backgroundColor: colors.muted,
        borderTopLeftRadius: spacing.m,
        borderTopRightRadius: spacing.m,
        gap: spacing.m,
    }
});