import styled from 'styled-components'

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

export const Header = styled.header`
  flex:1;
  display: flex;
  justify-content: space-between;
  max-width: 1130px;
  width: 100%;
  padding: 2rem 0;

  & nav{
    display: flex;
    gap: .75rem;
  }

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

export const Content = styled.main`
  max-width: 1130px;
  width:100%;
`