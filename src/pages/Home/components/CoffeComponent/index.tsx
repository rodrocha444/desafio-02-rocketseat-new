import NumberFormat from 'react-number-format'

import { ButtonAddToCart } from "../../../../components/Buttons";
import { Select } from "../../../../components/Select";
import { CoffeContainer, Subtitle, Title } from "./styles";

import { CoffeProps } from '../../../../data/coffes';
import { useState } from 'react';


export function CoffeComponent({ imgSrc, tags, title, description }: CoffeProps) {
  const [units, setUnits] = useState(1);

  function decreaseUnits() {
    setUnits(state => (state > 1) ? (state - 1) : state);
  }

  function incrementUnits() {
    setUnits(state => state + 1)
  }

  return (
    <CoffeContainer>
      <img src={imgSrc} alt="Imagem ilustrativa do Café" />

      <div className="tags">
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>

      <Title>{title}</Title>
      <Subtitle >{description}</Subtitle>

      <div className="buy-details">
        <div>
          <span className="prefix">R$ </span>
          <NumberFormat
            decimalSeparator=','
            decimalScale={2}
            fixedDecimalScale={true}
            displayType='text'
            value={9.9}
            className='value'
          />
        </div>
        <div className='cart-features'>
          <Select
            counter={units}
            decreaseUnits={decreaseUnits}
            incrementUnits={incrementUnits}
          />
          <ButtonAddToCart />
        </div>
      </div>
    </CoffeContainer>
  )
}