import styled from "styled-components";

export const CheckoutContainer = styled.section`
  & > form{
    display: flex;
    gap: 2rem;

    & .cart{
      flex: 2;
    }

    & .infos{
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      & .data{
        display: grid;
        grid-template-columns: 2fr 3fr 1fr;
        grid-gap: 1rem;
      }
      .cep{
        grid-area: 1;
      }
      .rua{
        grid-area: 2/1/2/4;
      }
      .numero{
        grid-area: 3;
      }
      .complemento{
        grid-area: 3/2/3/4;
      }
      .bairro{
        grid-area: 4;
      }
      .cidade{
        grid-area: 4/2;
      }
      .uf{
        grid-area: 4/3;
        text-transform: uppercase;
      }
      
      & input{
        padding: 0.75rem;
        gap: 0.25rem;
        min-width: 0;

        background: ${props => props.theme["base-input"]};

        border: 1px solid ${props => props.theme["base-button"]};
        border-radius: 4px;

        font-size: 0.875rem;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};

        &::placeholder{
          font-size: 0.875rem;
          line-height: 130%;

          color: ${props => props.theme["base-label"]};
        }
      }
    }
  }

  & .address-and-pay{
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px;
    margin-bottom: 0.75rem;
    & .options{
      width: 100%;
      display: flex;
      gap: 0.75rem;
      & > div{
        flex: 1;
      }
    }
  }
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  margin-bottom: 1rem;
  color: ${props => props.theme["base-subtitle"]};

`
