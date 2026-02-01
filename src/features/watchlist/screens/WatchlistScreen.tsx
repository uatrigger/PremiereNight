import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useWatchlistStore } from '../store/watchlistStore';
import { WatchlistItem } from '../components/WatchlistItem';
import { Loader, ScrollableScreenLayout } from '@shared/components';
import { spacing } from '@shared/theme/spacing';
import { typography } from '@shared/theme/typography';
import { colors } from '@shared/theme/colors';

export const WatchlistScreen = () => {
  const movies = useWatchlistStore((state) => state.movies);
  const hydrate = useWatchlistStore((state) => state.hydrate);
  const isHydrated = useWatchlistStore((state) => state.isHydrated);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!isHydrated) {
    return <Loader />;
  }

  return (
    <ScrollableScreenLayout>
      <View style={styles.contaner}>
        <Text style={[typography.action, styles.text]}>Watch List</Text>
        {movies?.length > 0 &&
          movies.map((movie) => {
            return <WatchlistItem key={movie.id} movie={movie} />;
          })}
      </View>
    </ScrollableScreenLayout>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    paddingLeft: spacing.m,
    gap: spacing.l,
  },
  text: {
    color: colors.muted,
  },
});
