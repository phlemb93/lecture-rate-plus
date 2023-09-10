import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IsOpenContextProvider } from './utilities/IsOpenContext.js';
import { UserContextProvider } from './utilities/UserContext.js';

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


