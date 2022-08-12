import styled from 'styled-components'
import { ShoppingCart, Trash } from 'phosphor-react'

const Button = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  
  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-button']};
  font-weight: 700;
  border-radius: 6px;

  transition: background .2s;

  &:hover{
    background: ${props => props.theme['base-hover']};
  }
`

export const ButtonLabel = styled(Button)`
  min-width: 132px;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`
const RemoveButtonChildren = (color: string) => (
  <>
    <Trash size={20} color={color} weight='bold' />
    REMOVER
  </>
)

export const RemoveButton = styled(Button).attrs((props) => ({
  children: RemoveButtonChildren(props.theme.purple)
}))`
  &:hover{
    color: ${props => props.theme['base-subtitle']}
  }
`

const ButtonCartChildren = <ShoppingCart weight='fill' size={20} />

export const ButtonCart = styled(Button).attrs(() => ({
  children: ButtonCartChildren
}))`
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  &:hover{
    filter: brightness(0.95);
  }
`
export const ButtonAddToCart = styled(Button).attrs(() => ({
  children: ButtonCartChildren
}))`
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['base-card']};

  &:hover{
    background: ${props => props.theme['purple']};
  }
`

