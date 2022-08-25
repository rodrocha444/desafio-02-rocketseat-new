import { useContext } from 'react';
import { Select } from '../../../../components/Select';
import { CoffeName, Container, NumberFormatStyled } from './styles';
import { RemoveButton } from '../../../../components/Buttons'
import { CartCoffeProps, CartContext } from '../../../../Router';

export function CoffeCart({ id, imgSrc, title, units }: CartCoffeProps) {
  const { addToCart } = useContext(CartContext)

  function increaseUnits() {
    addToCart(id, 1)
  }

  function decreaseUnits() {
    if (units > 1) {
      addToCart(id, -1)
    }
  }
  return (
    <Container>
      <div>
        <img src={imgSrc} alt="imagem ilustrativa do café selecionado" />
        <div>
          <CoffeName>{title}</CoffeName>
          <span>
            <Select counter={units} incrementUnits={increaseUnits} decreaseUnits={decreaseUnits} />
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