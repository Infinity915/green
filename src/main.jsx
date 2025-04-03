import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Context from './assets/Context.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <App />
    </Context>    
  </StrictMode>,
)
