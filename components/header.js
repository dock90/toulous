import Link from 'next/link'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  padding: 0 76px;

  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }

  a {
    font-family: interstate-mono, monospace;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
  }
`

const Logo = styled.a`
  font-weight: bold;
  font-size: 34px;
`

const Nav = styled.div`
  display: grid;
  justify-content: end;
  align-content: center;

  a {
    font-size: 20px;
  }
`

const Header = () => (
  <Container>
    <Link href='/'>
      <Logo>toulous</Logo>
    </Link>
    <Nav>
      <Link href='/blog'>
        <a>blog</a>
      </Link>
    </Nav>
  </Container>
)

export default Header
