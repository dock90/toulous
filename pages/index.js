import Link from 'next/link'
import styled from 'styled-components'
// components
import Layout from '../components/layout'
import Button from '../components/button'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  padding-left: 76px;
`

const Intro = styled.div`
  h1, h3 {
    font-family: interstate-mono, monospace;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: 5.25rem;
  }

  h3 {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 96px;
    max-width: 350px;
  }
`

const Home = () => {
  return (
    <Layout>
      <Container>
        <Intro>
          <h1>Reimagine content creation.</h1>
          <h3>Toulous is a tool that lets you repourpose existing content quickly and originally.</h3>
          <Link href='/fft'>
            <a>
              <Button>Check it Out</Button>
            </a>
          </Link>
        </Intro>
      </Container>
    </Layout>
  )
}

export default Home
