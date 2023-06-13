import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/**root routes */

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Root Router</div>
    },
    {
        path: '/register',
        element: <div>Register</div>
    },

])
export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
