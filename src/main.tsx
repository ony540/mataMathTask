import ReactDOM from 'react-dom/client'
import { router } from './Router.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
)
