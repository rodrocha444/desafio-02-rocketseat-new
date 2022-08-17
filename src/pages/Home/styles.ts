import styled from "styled-components";
import { defaultTheme } from '../../styles/themes/defaultTheme'

type backgroundColorType = keyof typeof defaultTheme

interface IconProps {
  backgroundColor: backgroundColorType
}

export const CoverContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 5.875rem 0;
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
  row-gap: 1.25rem;

  & > div{
    display: flex;
    align-items: center;
  }
  & strong{
    line-height: 130%;

    color: ${props => props.theme["base-text"]};
  }
`

export const Icon = styled.span<IconProps>`
  display: inline-block;
  margin-right: 0.75rem;
  
  border-radius: 100%;
  padding: 8px;
  line-height: 1; 
  
  color: ${props => props.theme.white};
  background: ${props => props.theme[props.backgroundColor]};
`

export const CoffesMenuContainer = styled.section`
  margin-bottom: 5rem;
  
  & .coffes{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
  }
`

export const H2 = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  margin-bottom: 3.375rem;

  color: ${props => props.theme["base-subtitle"]};
`