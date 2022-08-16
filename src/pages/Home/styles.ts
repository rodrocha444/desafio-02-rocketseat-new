import styled from "styled-components";
import { defaultTheme } from '../../styles/themes/defaultTheme'

type backgroundColorType = keyof typeof defaultTheme

interface IconProps {
  backgroundColor: backgroundColorType
}

export const CoverContainer = styled.section`
  display: flex;
  align-items: center;
  padding-top: 5.875rem;
  gap: 3.5rem;
`

export const Title = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;

  color: ${props => props.theme["base-title"]};
`

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 1rem;

  color: ${props => props.theme["base-subtitle"]};
  font-stretch: 100;
`

export const FeaturesDiv = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & .icon{
    padding: 8px;
    background-color: red;
    color: ${props => props.theme.white};
    border-radius: 999px;
  }

  & > div {
    
  }
`

export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
`