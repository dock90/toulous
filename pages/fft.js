import styled from 'styled-components'
// components
import Header from '../components/header'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns: 1fr;
  padding-left: 76px;
  max-width: 1440px;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

const Fft = () => {
  return (
    <Container>
      <Header />
      <h1>MEOOOW FFT FFT FFT</h1>
    </Container>
  )
}

export default Fft
