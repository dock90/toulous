import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const theme = {
  colors: {
    primary: '#606060',
    secondary: '',
    dark: '#4c4f5a',
    background: '#f7f9fc'
  },
  status: {
    critical: '#ff4040',
    warning: '#FFAA15',
    clear: '#00C781',
    unknown: '#CCCCCC'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
