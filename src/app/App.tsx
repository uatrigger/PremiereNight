import React from 'react';
import { QueryProvider } from '@app/providers/QueryProvider';
import { NavigationProvider } from '@app/providers/NavigationProvider';

const App = () => {
  return (
    <QueryProvider>
      <NavigationProvider />
    </QueryProvider>
  );
};

export default App;
