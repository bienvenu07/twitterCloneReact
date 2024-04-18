import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profils from './composant/Profils.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Timeline1 from './composant/Timeline1.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [{ path: "/", element: <Timeline1 /> }, 
  { path: "/:homme", element: <Profils /> },]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
