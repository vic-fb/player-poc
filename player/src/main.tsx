import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const playerElement = document.querySelector('[data-video-src]') as HTMLElement;


ReactDOM.createRoot(playerElement).render(
  <React.StrictMode>
    <App src={playerElement.dataset.videoSrc} />
  </React.StrictMode>
)
