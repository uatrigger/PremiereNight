import Config from 'react-native-config';

type Env = {
  TMDB_API_KEY: string;
  TMDB_BASE_URL: string;
};

const requiredEnv = <K extends keyof Env>(key: K): Env[K] => {
  const value = Config[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const ENV: Env = {
  TMDB_API_KEY: requiredEnv('TMDB_API_KEY'),
  TMDB_BASE_URL: requiredEnv('TMDB_BASE_URL'),
};
