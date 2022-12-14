import { Minus, Plus } from 'phosphor-react'
import NumberFormat from 'react-number-format'
import styled from 'styled-components'

export const SelectContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
  padding: 0.375rem 0.5rem;
  gap: 0.5rem;

  user-select: none;

  background: ${props => props.theme['base-button']};
  border-radius: 6px;
`

export const MinusStyled = styled(Minus)`
  color: ${props => props.theme.purple};
  transition: color .2s;
  &:hover{
    color: ${props => props.theme['purple-dark']};
    cursor: pointer;
  }
`
export const PlusStyled = styled(Plus)`
  color: ${props => props.theme.purple};
  transition: color .2s;
  &:hover{
    color: ${props => props.theme['purple-dark']};
    cursor: pointer;
  }
`

export const NumberFormatStyled = styled(NumberFormat)`
  line-height: 130%;
  color: ${props => props.theme['base-title']};
`