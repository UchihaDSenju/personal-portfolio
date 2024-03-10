import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Footer, Navbar} from './components/index.jsx' // This {} is important when using multiple imports


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto w-[95vw]'>
      <Navbar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
