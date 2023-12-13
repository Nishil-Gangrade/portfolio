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

