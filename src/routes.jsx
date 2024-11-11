import React from 'react';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PropertyListing from './components/PropertyListing';
import Home from './pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

export const ROUTES = {
    HOME: '/',
    PROPERTY_LIST: '/property/list',
};

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Home />,
        errorElement: <PageNotFound />,
    },
    {
        path: ROUTES.PROPERTY_LIST,
        element: <PropertyListing />,
        errorElement: <PageNotFound />,
    },
]);
