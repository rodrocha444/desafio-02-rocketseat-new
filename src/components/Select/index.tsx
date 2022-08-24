import { MinusStyled, NumberFormatStyled, PlusStyled, SelectContainer } from "./styles";

interface SelectProps {
  counter: number
  decreaseUnits: ()=>void
  incrementUnits: ()=>void
}

export function Select(props: SelectProps) {

  return (
    <SelectContainer>
      <MinusStyled size={14} weight={"bold"} onClick={props.decreaseUnits} />
      <NumberFormatStyled
        displayType="text"
        value={props.counter}
      />
      <PlusStyled size={14} weight={"bold"} onClick={props.incrementUnits} />
    </SelectContainer>
  )
}