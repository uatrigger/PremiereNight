import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';

import {
    ChevronLeft,
    ChevronRight,
    StarOutline,
    StarFilled,
    TrashIcon
} from './icons';

export type IconName =
    | 'chevron-left'
    | 'chevron-right'
    | 'star'
    | 'star-outline'
    | 'trash';

type Props = {
    name: IconName;
    size?: number;
    color?: string;
};

const ICON_MAP = {
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'star': StarFilled,
    'star-outline': StarOutline,
    'trash': TrashIcon,
} as const;

export const Icon = ({
    name,
    size = spacing.xl,
    color = colors.background,
}: Props) => {
    const SvgIcon = ICON_MAP[name];

    if (!SvgIcon) {
        return null;
    }

    return (
        <View style={styles.container}>
            <SvgIcon size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
