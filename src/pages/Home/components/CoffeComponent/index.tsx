import NumberFormat from 'react-number-format'

import { ButtonAddToCart } from "../../../../components/Buttons";
import { Select } from "../../../../components/Select";
import { CoffeContainer, Subtitle, Title } from "./styles";

type tags = 'tradicional' | 'com leite' | 'especial' | 'alcoólico' | 'gelado';
interface CoffeProps {
  imgSrc: string
  tags: tags[]
  title: string
  description: string
}

export function CoffeComponent({ imgSrc, tags, title, description }: CoffeProps) {
  return (
    <CoffeContainer>
      <img src={imgSrc} alt="Imagem ilustrativa do Café" />

      <div className="tags">
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>

      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>

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
          <Select />
          <ButtonAddToCart />
        </div>
      </div>
    </CoffeContainer>
  )
}