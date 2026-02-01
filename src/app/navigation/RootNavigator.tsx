import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { HomeStack } from './HomeStack';
import { WatchlistStack } from './WatchlistStack';

import { colors } from '@shared/theme/colors';
import { typography } from '@shared/theme/typography';
import { linking } from './linking';

export type RootTabParamList = {
    HomeTab: undefined;
    WatchlistTab: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootNavigator = () => {
    return (
        <NavigationContainer linking={linking}>
            <Tab.Navigator
                screenOptions={{
                    tabBarIcon: () => null,
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        backgroundColor: colors.background,
                        justifyContent: 'center',
                        height: Platform.OS === 'ios' ? 120 : 80,
                    },
                    tabBarActiveTintColor: colors.muted,
                    tabBarInactiveTintColor: colors.textSecondary,
                    tabBarLabelStyle: {
                        ...typography.subtitle,
                    },
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeStack}
                    options={{
                        title: 'Home',
                    }}
                />

                <Tab.Screen
                    name="WatchlistTab"
                    component={WatchlistStack}
                    options={{
                        title: 'Watchlist',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};