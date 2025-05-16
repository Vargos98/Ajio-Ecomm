import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme} from './utils/Themes'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
     <BrowserRouter>
        <Container>
          Hi there
        </Container>
     </BrowserRouter>
    </ThemeProvider>
  )
}

export default App