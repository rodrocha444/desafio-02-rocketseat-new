import { MinusStyled, PlusStyled, SelectContainer } from "./styles";

interface SelectProps {
  counter: number;
}
export function Select({ counter }: SelectProps) {
  return (
    <SelectContainer>
      <MinusStyled size={14} weight={"bold"} />
      <span>{counter}</span>
      <PlusStyled size={14} weight={"bold"} />
    </SelectContainer>
  )
}