import NumberFormat from "react-number-format";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  & > div{
    display: flex;
    & > img {
      width: 4rem;
      height: 4rem;
    }
  }

  & > div > div{
    margin-left: 1.25rem;
    & span{
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const CoffeName = styled.div`
  line-height: 130%;
  color: ${props => props.theme["base-subtitle"]};
`

export const NumberFormatStyled = styled(NumberFormat)`

font-weight: 700;
line-height: 130%;


color: ${props => props.theme["base-text"]};


`