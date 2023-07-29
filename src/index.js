import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SigmaApp from './components/SigmaApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SigmaApp />,
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
