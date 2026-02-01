import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@features/movies/screens/HomeScreen';
import { MovieDetailScreen } from '@features/movies/screens/MovieDetailScreen';

export type HomeStackParamList = {
    Home: undefined;
    MovieDetail: {
        movieId: number;
        fromApp?: boolean;
    };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Premiere Night',
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="MovieDetail"
                component={MovieDetailScreen}
                options={{
                    title: 'Details',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};