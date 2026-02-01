import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WatchlistScreen } from '@features/watchlist/screens/WatchlistScreen';

export type WatchlistStackParamList = {
  Watchlist: undefined;
};

const Stack = createNativeStackNavigator<WatchlistStackParamList>();

export const WatchlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          title: 'My Watchlist',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
