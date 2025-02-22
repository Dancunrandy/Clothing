import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
       <PersistGate persistor={persistor}>
             <App />
    </PersistGate>
</React.StrictMode>

</Provider>

);

