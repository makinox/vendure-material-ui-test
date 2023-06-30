import { ApolloProvider } from '@apollo/client/react';
import ReactDOM from 'react-dom';
import React from 'react';

import { client, reportWebVitals } from '@/utils';
import Home from '@/pages/Home';
import '@/styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
