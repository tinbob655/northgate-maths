import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes.jsx';
import Header from './components/multiPageComponents/header.jsx';
import Footer from './components/multiPageComponents/footer.jsx';
import SitePasswordWrapper from './components/multiPageComponents/sitePasswordWrapper.jsx';
import ScrollToTop from './components/multiPageComponents/scrollToTop.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SitePasswordWrapper>
        <ScrollToTop />

        <header>
          <Header/>
        </header>

        <AllRoutes />

        <footer>
          <Footer />
        </footer>

      </SitePasswordWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
