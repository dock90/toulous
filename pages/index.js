import Link from 'next/link'
import styled from 'styled-components'
// components
import Header from '../components/header'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

const Home = () => (
  <Container>
    <Header />
    <Content>
      <div>
        <h1>Reimagine content creation.</h1>
        <h3>Toulous is a tool that lets you repourpose existing content quickly and originally.</h3>
        <Link href='/fft'>
          <a>
            <button>Check it Out</button>
          </a>
        </Link>
      </div>
      <div>
        <img src='./typewriter.png' />
      </div>
    </Content>
  </Container>
)

export default Home
