import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme} from ''
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>App</ThemeProvider>
  )
}

export default App