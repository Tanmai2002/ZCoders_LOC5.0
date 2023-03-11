import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurrentOrders } from './components/CurrentOrders'
import { Home } from './components/Home'
import { Latest } from './components/Latest'
import { PastOrders } from './components/PastOrders'
import { Profile } from './components/Profile'
import { CURRENT_ORDERS_PAGE, HOME_PAGE, LATEST_PAGE, PAST_ORDERS_PAGE, PROFILE_PAGE } from './constants/Routes'
import './index.css'

const router = createBrowserRouter([
  {
    path:HOME_PAGE,
    element:<Home></Home>
  },
  {
    path:PROFILE_PAGE,
    element:<Profile></Profile>
  },
  {
    path:CURRENT_ORDERS_PAGE,
    element:<CurrentOrders></CurrentOrders>
  },
  {
    path:PAST_ORDERS_PAGE,
    element:<PastOrders></PastOrders>
  },
  {
    path: LATEST_PAGE,
    element:<Latest></Latest>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
