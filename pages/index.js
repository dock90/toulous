import Link from 'next/link'
import styled from 'styled-components'
// components
import Header from '../components/header'
import Button from '../components/button'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 150px;
  grid-template-columns: 1fr;
  padding-left: 76px;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

const Intro = styled.div`
  h1, h3 {
    font-family: 'InterstateMono';
    font-weight: bold;
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

const Illustration = styled.div`
  position: absolute;
  top: 12%;
  right: -5%;

  img {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`

const Home = () => {
  console.log('Oh hey there, thanks for taking a peek at the console.')
  return (
    <Container>
      <Header />
      <Content>
        <Intro>
          <h1>Reimagine content creation.</h1>
          <h3>Toulous is a tool that lets you repourpose existing content quickly and originally.</h3>
          <Link href='/fft'>
            <a>
              <Button>Check it Out</Button>
            </a>
          </Link>
        </Intro>
        <Illustration>
          <img src='./typewriter.png' />
        </Illustration>
      </Content>
    </Container>
  )
}

export default Home
