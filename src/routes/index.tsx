import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from 'src/pages/ErrorPage';
import HomePage from 'src/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
