import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Writing from './Components/Writing';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import W1 from './Components/Writing/W1';
import W2 from './Components/Writing/W2';
import W3 from './Components/Writing/W3';
import W4 from './Components/Writing/W4';
import About from './Components/About';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/writing",
        element: <Writing/>,
        
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/writing/w1",
        element: <W1/>
      },
      {
        path: "/writing/w2",
        element: <W2/>
      },
      {
        path: "/writing/w3",
        element: <W3/>
      },
      {
        path: "/writing/w4",
        element: <W4/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

