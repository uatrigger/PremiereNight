import type { LinkingOptions } from '@react-navigation/native';
import type { RootTabParamList } from './RootNavigator';
import type { HomeStackParamList } from './HomeStack';

type LinkingParamList = RootTabParamList & HomeStackParamList;

export const linking: LinkingOptions<LinkingParamList> = {
  prefixes: ['premierenight://'],
  config: {
    screens: {
      HomeTab: {
        screens: {
          Home: 'home',
          MovieDetail: 'movie/:movieId',
        },
      },
      WatchlistTab: {
        screens: {
          Watchlist: 'watchlist',
        },
      },
    },
  },
};
