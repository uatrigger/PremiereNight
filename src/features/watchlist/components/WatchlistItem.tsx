import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import type { Movie } from '@features/movies/types/movie';
import { TMDB_CONFIG } from '@config/tmdb';
import { useWatchlistStore } from '../store/watchlistStore';
import { SCREEN_WIDTH, CARD_HEIGHT } from '@shared/constants/layout';

import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';
import { typography } from '@shared/theme/typography';

import { Button } from '@shared/components';
import { Icon } from '@shared/components/Icon';

type Props = {
  movie: Movie;
};

export const WatchlistItem = ({ movie }: Props) => {
  const removeMovie = useWatchlistStore((state) => state.removeMovie);

  const posterUrl = movie.poster_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.IMAGE_SIZES.poster}${movie.poster_path}`
    : undefined;

  return (
    <ImageBackground
      source={{ uri: posterUrl }}
      imageStyle={styles.image}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.remove}>
        <Button onPress={() => removeMovie(movie.id)}>
          <Icon name={'trash'} />
        </Button>
      </View>

      <View style={styles.press}>
        <View style={styles.pressDescription}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[typography.title, styles.title]}>
            {movie.title}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - spacing.l,
    height: CARD_HEIGHT,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    borderRadius: spacing.m,
  },
  press: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  pressDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.m,
    borderBottomLeftRadius: spacing.m,
    borderBottomRightRadius: spacing.m,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  title: {
    color: colors.muted,
  },
  remove: {
    padding: spacing.s,
  },
});
