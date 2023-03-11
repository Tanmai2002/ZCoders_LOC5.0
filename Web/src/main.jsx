import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Web3Context, Web3State } from './context/Web3Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3State>
    <App />
    </Web3State>

  </React.StrictMode>,
)
