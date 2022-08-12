import { IconProps } from "phosphor-react";
import { SelectOptionContainer } from "./styles";


interface SelectOptionProps {
  selected: boolean
  textContent: string
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function SelectOption({ selected, textContent, icon }: SelectOptionProps) {
  return (
    <SelectOptionContainer selected={selected}>
      <>
        {icon}
        {textContent}
      </>
    </SelectOptionContainer>
  )
}