import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/header'
import Footer from '../components/footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Layout = ({ children }) => (
  <Container>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/qgr5vwj.css"></link>
    </Head>
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
