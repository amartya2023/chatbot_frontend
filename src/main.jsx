import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'

export const server = "https://chatbot-server-eiqd.onrender.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </UserProvider>
  </StrictMode>,
)
