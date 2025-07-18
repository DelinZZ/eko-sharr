import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';  // -> po, këtu importon App nga src/pages
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
