import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { App } from './app'

// biome-ignore lint/style/noNonNullAssertion: <React need this>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
