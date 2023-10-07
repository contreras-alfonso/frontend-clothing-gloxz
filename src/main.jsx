import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LayoutPublico } from './layouts/LayoutPublico';
import { Index } from './pages/Index';
import { Carrito } from './pages/Carrito';
import { Producto } from './pages/Producto';
import { LayoutPrivado } from './layouts/LayoutPrivado';
import { IndexPrivate } from './pages/Private/IndexPrivate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublico/>,
    children:[
      {
        index:true,
        element: <Index/>
      },
      {
        path:'/carrito',
        element: <Carrito/>
      },
      {
        path:'/producto/:id',
        element: <Producto/>
      }
    ]
  },

  {
    path:'/administration',
    element: <LayoutPrivado/>,
    children:[
      {
        index:true,
        element: <IndexPrivate/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
