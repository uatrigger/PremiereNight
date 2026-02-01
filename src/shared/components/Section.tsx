import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '@shared/theme/colors';
import { typography } from '@shared/theme/typography';

export const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <View style={styles.contaner}>
        <Text style={[typography.action, styles.text]}>
            {title}
        </Text>
        {children}
    </View>
);

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
    },
    text:  {
        marginBottom: 12,
        color: colors.muted
    },
});