import styled from 'styled-components'

// styles
const Container = styled.button`
  height: 64px;
  width: 180px;
  background: ${ ({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  justify-self: ${({ right }) => right ? 'end' : ''};
`

const Button = ({ right, children }) => <Container right={right}>{children}</Container>

export default Button
