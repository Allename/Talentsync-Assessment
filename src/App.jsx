import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './constants/theme'
import Home from './Home'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
