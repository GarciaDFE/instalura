import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Home() {
  return <Title>Página 404!</Title>
}
