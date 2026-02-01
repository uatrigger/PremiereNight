import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@shared/theme/colors';
import { spacing } from '@shared/theme/spacing';

type Props = {
    children: React.ReactNode;
    contentContainerStyle?: object;
};

export const ScrollableScreenLayout = ({
    children,
    contentContainerStyle,
}: Props) => {
    return (
        <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={[
                    styles.content,
                    contentContainerStyle,
                ]}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : spacing.xl,
        backgroundColor: colors.background,
    },
    scroll: {
        flex: 1,
    },
    content: {
        paddingBottom: 24,
    },
});