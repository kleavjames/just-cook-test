import './src/theme/unistyles';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Root from './src/navigation/root';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}
