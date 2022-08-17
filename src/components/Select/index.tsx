import { useState } from "react";
import NumberFormat from 'react-number-format'

import { MinusStyled, PlusStyled, SelectContainer } from "./styles";

export function Select() {
  const [counter, setCounter] = useState(1);

  function decreaseCounter() {
    setCounter(state => (state > 1) ? (state - 1) : state);
  }

  function increaseCounter() {
    setCounter(state => state + 1)
  }

  return (
    <SelectContainer>
      <MinusStyled size={14} weight={"bold"} onClick={decreaseCounter} />
      <NumberFormat
        displayType="text"
        value={counter}
      />
      <PlusStyled size={14} weight={"bold"} onClick={increaseCounter} />
    </SelectContainer>
  )
}