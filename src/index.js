import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <App />
        <GlobalStyleComponent />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
