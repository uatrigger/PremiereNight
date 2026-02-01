import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const Loader = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                padding: spacing.l,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ActivityIndicator color={colors.muted} size={'large'} />
        </View>
    );
};
