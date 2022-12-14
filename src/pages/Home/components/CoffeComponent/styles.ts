import styled from "styled-components";

export const CoffeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.25rem;
  max-width: 16rem;
  height: 19.375rem;
  
  text-align: center;
  
  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;

  & img{
    margin-top:-20px;
    width: 7.5rem;
  }

  & .tags{
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin: 0.75rem 0 1rem 0;
 }
  & .tags > span{
    padding: 0.25rem 0.5rem;

    border-radius: 6.25rem;

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;

    color: ${props => props.theme["yellow-dark"]};
    background: ${props => props.theme["yellow-light"]};
  }

  & .buy-details{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  & .buy-details .prefix{
    font-size: 0.875rem;

    color: ${props => props.theme["base-text"]};
  }

  & .buy-details .value{
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${props => props.theme["base-text"]};
  }
  
  & .buy-details .cart-features{
    display: flex;
    gap: 0.5rem;
  }
`

export const Title = styled.h2`
  white-space: nowrap;

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${props => props.theme["base-subtitle"]};
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  padding: 0.5rem 0 2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${props => props.theme["base-label"]};
`