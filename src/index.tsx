import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './containers/App/App';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
