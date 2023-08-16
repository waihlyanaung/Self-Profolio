import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Aos from 'aos'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <App />
  </>
)

Aos.init({
  offset: 0,
  duration: 1000,
});
