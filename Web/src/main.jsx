import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { HOME_PAGE, PROFILE_PAGE } from './constants/Routes'
import './index.css'

const router = createBrowserRouter([
  {
    path:HOME_PAGE,
    element:<Home></Home>
  },
  {
    path:PROFILE_PAGE,
    element:<Profile></Profile>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
