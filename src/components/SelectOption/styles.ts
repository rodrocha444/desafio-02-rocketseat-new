import { AllHTMLAttributes } from 'react'
import styled from 'styled-components'

interface SelectOptionContainerProps extends AllHTMLAttributes<HTMLDivElement> {
  selected: boolean
}

export const SelectOptionContainer = styled("div") <SelectOptionContainerProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: .75rem;
  user-select: none;

  background: ${props => props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  font-size: 0.75rem;
  ${props => props.selected ? `border: 1px solid ${props.theme['purple']};`: 'border: 1px solid transparent;'};
  border-radius: 6px;
  text-transform: uppercase;

  transition: background .2s;

  & span{
    color: ${props => props.theme['purple']};
    font-size: 1rem;
  }

  &:hover{
    background: ${props => props.theme['base-hover']};
    cursor: pointer;
  }
`