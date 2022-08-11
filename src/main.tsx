import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/defaultTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
)
