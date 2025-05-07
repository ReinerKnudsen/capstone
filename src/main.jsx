import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { Provider } from 'react-redux';
import { store } from './store/store.js';

import App from './App.jsx';

import { CartProvider } from './contexts/cart.context';

import { GlobalStyle, AppContainer } from './index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <AppContainer>
            <App />
          </AppContainer>
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
