import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root")
// @ts-ignore
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
