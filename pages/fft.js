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
  padding-right: 76px;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`

const Card = styled.div`
  display: grid;
  border-radius: 40px;
  background: #FFFFFF;
  box-shadow: 5px 5px 50px 5px rgba(96,96,96,0.16);
  padding: 20px 40px;
  margin-bottom: 52px;

  textarea {
    height: auto;
    min-width: 84vw;
    max-width: 84vw;
    outline: none;
    border: none;
  }
`

const Fft = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <textarea
            placeholder='Copy text here...'
          />
        </Card>
        <Button right>Process</Button>
      </Content>
    </Container>
  )
}

export default Fft
