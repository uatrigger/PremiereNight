import React from 'react';
import { FlatList } from 'react-native';

import type { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

import { CARD_INTERVAL, CARD_WIDTH } from '@shared/constants/layout';

const SNAP_INTERVAL = CARD_WIDTH + CARD_INTERVAL;

type Props = {
    movies: Movie[];
    onMoviePress: (movieId: number) => void;
};

export const MovieCarousel = ({ movies, onMoviePress }: Props) => {

    return (
        <FlatList
            horizontal
            style={{ flex: 1 }}
            data={movies}
            contentContainerStyle={{
                alignItems: 'stretch',
                paddingRight: CARD_INTERVAL,
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <MovieCard
                    movie={item}
                    onPress={() => onMoviePress(item.id)}
                />
            )}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={SNAP_INTERVAL}
            snapToAlignment="start"
            decelerationRate="fast"
            bounces={false}

            initialNumToRender={1}
            maxToRenderPerBatch={2}
            windowSize={3}
            removeClippedSubviews
            getItemLayout={(_, index) => ({
                length: SNAP_INTERVAL,
                offset: (SNAP_INTERVAL) * index,
                index,
            })}

            onMomentumScrollEnd={(event) => {
                // TODO: Uncomment if onIndexChange prop is added
                // const index = Math.round(
                //     event.nativeEvent.contentOffset.x / SCREEN_WIDTH,
                // );
                // onIndexChange?.(index);
            }}
        />
    );
};
