import styled from 'styled-components'

//styles
const Container = styled.div`
  display: grid;
  align-content: center;

  p {
    font-family: interstate-mono, monospace;
    font-weight: 400;
    color: #606060;
    margin-left: 76px;
  }

  a {
    text-decoration: none;
    color: #606060;
  }
`

const Footer = () => (
  <Container>
    <p>Build by Edward @ <a href='https://www.dock90.io'>dock90</a></p>
  </Container>
)

export default Footer
