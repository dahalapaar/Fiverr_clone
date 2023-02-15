import React from "react"
import './app.scss'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home"
import Gigs from "./page/gigs/Gigs"
import Gig from "./page/gigs/Gigs"
import Add from "./page/add/Add"
import Message from "./page/message/Message"
import Messages from "./page/messages/Messages"
// import Orders from "./page/orders/Orders"
import Mygigs from "./page/myGigs/Mygigs"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/mygigs",
          element: <Mygigs/>
        },
        // {
        //   path: "/orders",
        //   element: <Orders/>
        // },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
