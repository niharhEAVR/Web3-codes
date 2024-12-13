import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Buffer } from "buffer";

// Ensure Buffer is available globally
window.Buffer = window.Buffer || Buffer; // buffer is need for the SendToken component


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
