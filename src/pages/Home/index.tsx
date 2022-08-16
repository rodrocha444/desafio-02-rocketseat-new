import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeHomeImg from '../../assets/generic-imgs/coffe-home.png'
import { CoverContainer, FeaturesDiv, Icon, Subtitle, Title } from './styles'

export function Home() {
  return (
    <CoverContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

        <FeaturesDiv>
          <div>
            <Icon backgroundColor={}>
              <ShoppingCart size={16} weight='fill' />
            </Icon>

            Compra simples e segura
          </div>
          <div>
            <span className='icon'>
              <Package size={16} weight='fill' className='icon' />
            </span>

            Compra simples e segura
          </div>
          <div>
            <Timer size={16} weight='fill' className='icon' />
            Compra simples e segura
          </div>
          <div>
            <Coffee size={16} weight='fill' className='icon' />
            Compra simples e segura
          </div>
        </FeaturesDiv>
      </div>

      <img src={CoffeHomeImg} alt="Coffe Delivery image simbólica" />
    </CoverContainer >
  )
}