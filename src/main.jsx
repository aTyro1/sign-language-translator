import React from 'react'
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, MantineProvider } from '@mantine/core'
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.jsx'
import './style.css'

const theme = createTheme({
    body: {
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    },
    '#root':{
      width: "100%",
      height: "100%",
      overflow: "auto"
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
    <CharacterAnimationsProvider>
    <App />
    </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
