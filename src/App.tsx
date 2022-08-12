import { ButtonCart, ButtonLabel, RemoveButton, ButtonAddToCart } from "./components/Buttons"
import { Select } from "./components/Select"
import { SelectOption } from "./components/SelectOption"

export function App() {
  return (
    <div >
      <ButtonLabel>LABEL</ButtonLabel>
      <ButtonCart />
      <ButtonAddToCart />
      <RemoveButton />
      <Select counter={2} />
      <SelectOption />
    </div>
  )
}

