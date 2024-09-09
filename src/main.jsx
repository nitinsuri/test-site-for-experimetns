import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import LeftNavStatusProvider from './Contexts/LeftNavContext/LeftNavContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeftNavStatusProvider>
      <App />
    </LeftNavStatusProvider>
  </React.StrictMode>
);
