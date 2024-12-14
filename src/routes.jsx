import React from 'react';
import {Routes, Route} from 'react-router-dom';

//import all pages
import Home from './components/pages/home/home';

export default function AllRoutes() {

    function getRoutes() {
        let routesHTML = [];

        //map of all pages
        const pages = {
            ['']: <Home />,
        };

        Object.keys(pages).forEach((page) => {
            routesHTML.push(
                <Route exact path={`/${page}`} element={pages[page]} />
            );
        });

        return routesHTML;
    };

    return (
        <div style={{marginTop: '120px'}}>
            <Routes>
                {getRoutes()}
            </Routes>
        </div>
    );
};