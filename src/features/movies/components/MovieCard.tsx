import React from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { TMDB_CONFIG } from '@config/tmdb';
import { CARD_WIDTH, CARD_HEIGHT } from '@shared/constants/layout';

import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';
import { typography } from '@shared/theme/typography';

import type { Movie } from '../types/movie';

type Props = {
  movie: Movie;
  onPress: () => void;
};

export const MovieCard = ({ movie, onPress }: Props) => {
  const posterUrl = movie.backdrop_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.IMAGE_SIZES.poster}${movie.backdrop_path}`
    : movie.poster_path
    ? `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.IMAGE_SIZES.poster}${movie.poster_path}`
    : undefined;

  return (
    <ImageBackground
      source={{ uri: posterUrl }}
      imageStyle={styles.image}
      resizeMode="cover"
      style={styles.container}
    >
      <Pressable style={styles.press} onPress={onPress}>
        <View style={styles.pressDescription}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[typography.title, styles.title]}>
            {movie.title}
          </Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: spacing.m,
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
    padding: spacing.m,
    borderBottomLeftRadius: spacing.m,
    borderBottomRightRadius: spacing.m,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  title: {
    color: colors.muted,
  },
});
