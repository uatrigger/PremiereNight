import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '@shared/theme/colors';
import { typography } from '@shared/theme/typography';

export const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <View style={{ flex: 1 }}>
        <Text style={[typography.action, { marginBottom: 12, color: colors.muted }]}>
            {title}
        </Text>
        {children}
    </View>
);
