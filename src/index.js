import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes.jsx';
import Header from './components/multiPageComponents/header.jsx';
import SitePasswordWrapper from './components/multiPageComponents/sitePasswordWrapper.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SitePasswordWrapper>

        <Header/>
        <AllRoutes />

      </SitePasswordWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
