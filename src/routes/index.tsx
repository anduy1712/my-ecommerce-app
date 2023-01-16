import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'src/App';
import Error from 'src/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
