import React from 'react';

import {
  createBrowserRouter,
 
} from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Details from '../Pages/Details/Details';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement: <Error></Error>,
   children : [
   
    {
        index: true,
        path:"/",
        loader: ()=> fetch('Data.json'),
        Component:Home
    },
    {
      path: "/about",
      Component:About
    },
    {
      path:'/readlist',
      loader: ()=> fetch('Data.json'),
      Component:ReadList
    },
    {
      path: "/details/:id",
      loader: ()=> fetch('Data.json'),
      Component:Details
    }
   ]

  },
]);