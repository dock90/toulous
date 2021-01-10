import styled from 'styled-components'

//styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const Coffee = styled.div`
  justify-self: center;
  img {
    border: 1px solid #606060;
    border-radius: 12px;
  }
`

const Footer = () => (
  <Container>
    <p>Build by Edward @ <a href='https://www.dock90.io'>dock90</a></p>
    <Coffee>
      <a href="https://www.buymeacoffee.com/dock90"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dock90&button_colour=ffffff&font_colour=606060&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00" /></a>
    </Coffee>
  </Container>
)

export default Footer
