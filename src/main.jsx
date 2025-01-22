import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EstilosGlobais from './componentes/EstilosGlobais/EstiloGlobal.jsx'
import { ThemeProvider } from 'styled-components'
import tema from './estilos/Theme.js'
import { VideoProvider } from './contexto/VideoContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider theme={tema}>
      <EstilosGlobais/>
      <VideoProvider>
        <App />
      </VideoProvider>
      
    </ThemeProvider>

  </StrictMode>,
)
