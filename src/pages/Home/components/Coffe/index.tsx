import { ButtonAddToCart } from "../../../../components/Buttons";
import { Select } from "../../../../components/Select";
import { CoffeContainer, Subtitle, Title } from "./styles";

interface CoffeProps {
  imgSrc: string;
}

export function Coffe({ imgSrc }: CoffeProps) {
  return (
    <CoffeContainer>
      <img src={imgSrc} alt="Imagem ilustrativa do Café" />

      <div className="tags">
        <span>TRADICIONAL</span>
        <span>com leite</span>
      </div>

      <Title>Expresso Tradicional</Title>
      <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>

      <div className="buy-details">
        <span>R$ {9.9}</span>
        <Select counter={1} />
        <ButtonAddToCart />
      </div>
    </CoffeContainer>
  )
}