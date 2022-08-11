import styled from 'styled-components'
import { ShoppingCart, Trash, IconProps } from 'phosphor-react'

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

export const ButtonCart = styled(Button).attrs(() => ({
  children: <ShoppingCart weight='fill' size={20} />
}))`
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  &:hover{
    background: ${props => props.theme['yellow-light']};
  }
`



const RemoveButtonContent = (props: IconProps) => (
  <>
    <Trash {...props} />
    REMOVER
  </>
)
export const RemoveButton = styled(Button).attrs((props) => ({
  children: <RemoveButtonContent size={20} color={props.theme.purple} weight='bold' />
}))`
  &:hover{
    color: ${props => props.theme['base-subtitle']}
  }
`