import { HTMLProps } from 'react';
import { Select } from '../../../../components/Select';
import { CoffeName, Container, NumberFormatStyled } from './styles';
import { RemoveButton } from '../../../../components/Buttons'

interface CoffeCartProps extends HTMLProps<HTMLDivElement> {
  srcImage: string
}
export function CoffeCart(props: CoffeCartProps) {
  return (
    <Container>
      <div>
        <img src={props.srcImage} alt="imagem ilustrativa do café selecionado" />
        <div>
          <CoffeName>Expresso Tradicional</CoffeName>
          <span>
            <Select />
            <RemoveButton />
          </span>
        </div>
      </div>
      <NumberFormatStyled
        decimalSeparator=','
        decimalScale={2}
        fixedDecimalScale={true}
        displayType='text'
        value={9.9}
        className='value'
        prefix="R$ "
      />
    </Container>
  );
}