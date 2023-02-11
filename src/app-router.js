import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import { Home } from "./components/home/Home";
import  Service  from "./components/service/Service";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
          </div>
        ),
      },
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
        element: (<div><h3>TESTClass</h3></div>)
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
      }
    ]
  }
]

);



export default router;