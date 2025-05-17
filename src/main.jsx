import { animate, scroll } from "motion"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';

animate("#root", { opacity: [0, 1] }, { duration: 1 });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
