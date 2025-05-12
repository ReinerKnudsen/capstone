import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';

import App from './App.jsx';

import { GlobalStyle, AppContainer } from './index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppContainer>
            <App />
          </AppContainer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
