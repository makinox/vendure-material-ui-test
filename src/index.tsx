import { ApolloProvider } from '@apollo/client/react';
import { createRoot } from 'react-dom/client';
import React from 'react';

import { client, reportWebVitals } from '@/utils';
import Home from '@/pages/Home';
import '@/styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
