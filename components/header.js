import Link from 'next/link'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  align-content: center;
`

const Logo = styled.a`
  font-family: interstate-mono, monospace;
  font-weight: bold;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  margin-left: 76px;
`

const Header = () => (
  <Container>
    <Link href='/'>
      <Logo>toulous</Logo>
    </Link>
  </Container>
)

export default Header
