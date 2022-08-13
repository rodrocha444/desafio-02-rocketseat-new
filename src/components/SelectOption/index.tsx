import { ReactElement } from "react";
import { SelectOptionContainer } from "./styles";


interface SelectOptionProps {
  selected: boolean
  textContent: string
  icon: ReactElement
  onClick: () => void
}

export function SelectOption({ selected, textContent, icon, onClick }: SelectOptionProps) {
  return (
    <SelectOptionContainer selected={selected} onClick={onClick}>
      <>
        <span>
          {icon}
        </span>
        {textContent}
      </>
    </SelectOptionContainer>
  )
}