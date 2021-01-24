import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
// components
import Layout from '../components/layout'
import Button from '../components/button'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  padding: 0 76px;

  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }
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
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 96px;
    max-width: 550px;
  }
`

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Toulous</title>
        <meta
          name='title'
          content='Toulous'
        />
        <meta name="description" content="A tool that lets you repurpose existing content quickly and originally." />
      </Head>
      <Container>
        <Intro>
          <h1>Reimagine content creation.</h1>
          <h3>Toulous is a tool that lets you repurpose existing content quickly and originally.</h3>
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
