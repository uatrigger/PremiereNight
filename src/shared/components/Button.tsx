import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';

type Props = {
    children: React.ReactNode;
    onPress: () => void;
};

export const Button = ({ children, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.action} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    action: {
        width: spacing.xxl,
        height: spacing.xxl,
        borderRadius: spacing.xl,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.muted,
        justifyContent: 'center',
        alignItems: 'center',
    },
});