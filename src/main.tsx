import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../assets/css/main.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
