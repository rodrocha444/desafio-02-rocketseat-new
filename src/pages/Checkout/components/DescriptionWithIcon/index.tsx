import { ReactNode } from "react"
import { Container } from "./styles"

interface DescriptionWithIconProps {
  Icon: ReactNode
  title: string
  subtitle: string
  iconColor: string
}

export function DescriptionWithIcon({ Icon, iconColor, title, subtitle }: DescriptionWithIconProps) {
  return (
    <Container iconColor={iconColor}>
      {Icon}
      <div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </Container>
  )
}