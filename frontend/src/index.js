import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IsOpenContextProvider } from '../src/utilities/IsOpenContext';
import { UserContextProvider } from './utilities/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<UserContextProvider>
<IsOpenContextProvider>
  <App />
</IsOpenContextProvider>
</UserContextProvider>
</BrowserRouter>
);


