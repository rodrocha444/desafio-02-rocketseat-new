import styled from 'styled-components'

interface ContainerProps {
  iconColor: string
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${props => props.iconColor};

  & > div{
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    & strong{
      line-height: 130%;
      color: ${props => props.theme['base-subtitle']};
    }

    & p{
      font-size: 0.875rem;
      line-height: 130%;

      color: ${props => props.theme['base-text']};
    }
  }
`