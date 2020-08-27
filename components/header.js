import Link from 'next/link'
import styled from 'styled-components'

// styles
const Logo = styled.a`
  font-family: 'InterstateMono';
  font-weight: bold;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  display: grid;
  align-items: center;
`

const Header = () => (
  <Link href='/'>
    <Logo>toulous</Logo>
  </Link>
)

export default Header
