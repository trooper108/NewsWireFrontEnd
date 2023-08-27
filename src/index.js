import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from 'react-redux'
import ReduxStore from './store/index';
import './stylesheets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <App/>
    </Provider>
  </React.StrictMode>
);

