import axios from 'axios';

import { ENV } from '@config/env';

export const httpClient = axios.create({
  baseURL: ENV.TMDB_BASE_URL,
  timeout: 10_000,
  params: {
    api_key: ENV.TMDB_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});
