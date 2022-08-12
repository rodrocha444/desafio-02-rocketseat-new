import styled from 'styled-components'

interface SelectOptionContainerProps {
  selected: boolean
}

export const SelectOptionContainer = styled("select")`
  background: ${props => props.theme['base-button']};

  display: flex;
  align-items: center;
  padding: 1rem;
  gap: .75rem;

  border-radius: 6px;
`