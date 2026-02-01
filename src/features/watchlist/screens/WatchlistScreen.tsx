import React, { useEffect } from 'react';
import {  View, Text } from 'react-native';

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
            <View style={{ flex: 1, paddingLeft: spacing.m, gap: spacing.l }}>
                <Text style={[typography.action, { color: colors.muted }]} >Watch List</Text>
                {movies?.length > 0 && movies.map((movie) => {
                    return <WatchlistItem key={movie.id} movie={movie} />
                })}
            </View>
        </ScrollableScreenLayout>
    );
};
