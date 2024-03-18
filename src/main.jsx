import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import { ProfileProvider } from './providers/ProfileProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)
