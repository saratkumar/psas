import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import About from "./components/about/about";
import { Home } from "./components/home/Home";
import Schedule from "./components/schedule/Schedule";
import  Service  from "./components/service/Service";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "class-schedule",
        element: <Schedule />
      },
      {
        path: "services",
        element: <Service />
      },
      {
        path: "therapy",
        element: (<div><h3>Therapy</h3></div>)
      },
      {
        path: "corporate-school",
        element: (<div><h3>Corporate</h3></div>)
      }, {
        path: "contact-us",
        element: (<div><h3>Contact</h3></div>)
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]

);



export default router;