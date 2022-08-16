import styled from 'styled-components'

export const MainContainer = styled("div")`
  & .logo{
    height: 2.5rem;
  }

  & .location{
    padding: .625rem;
    display: flex;
    align-items: center;
    gap: .25rem;

    border-radius: 6px;
    font-size: .875rem;
    color: ${props => props.theme['purple']};
    background: ${props => props.theme['purple-light']};

    transition: background .2s;

    &:hover{
      background: ${props => props.theme['base-hover']};
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  margin: auto;
  max-width: 1130px;

  & nav{
    display: flex;
    gap: .75rem;
  }
`

export const Content = styled.main`
  max-width: 1130px;
  margin: auto;
  padding: 0rem 1rem;
`