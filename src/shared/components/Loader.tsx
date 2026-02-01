import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const Loader = () => {
    return (
        <View style={styles.contaner}>
            <ActivityIndicator color={colors.muted} size={'large'} />
        </View>
    );
};

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.l,
        alignItems: 'center',
        justifyContent: 'center',
    },
});