import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeHomeImg from '../../assets/generic-imgs/coffe-home.png'
import CoffeImage from '../../assets/coffes-imgs/image.png'

import { Coffe } from './components/Coffe'
import { CoffesMenuContainer, CoverContainer, FeaturesDiv, Icon, Subtitle, Title } from './styles'

export function Home() {
  return (
    <>
      {/* <CoverContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

          <FeaturesDiv>
            <div>
              <Icon backgroundColor='yellow-dark' >
                <ShoppingCart size={16} weight='fill' />
              </Icon>
              <strong>
                Compra simples e segura
              </strong>
            </div>
            <div>
              <Icon backgroundColor='base-text'>
                <Package size={16} weight='fill' />
              </Icon>
              <strong>
                Embalagem deixa o café intacto
              </strong>
            </div>
            <div>
              <Icon backgroundColor='yellow'>
                <Timer size={16} weight='fill' />
              </Icon>
              <strong>
                Entrega rápida e rastreada
              </strong>
            </div>
            <div>
              <Icon backgroundColor='purple'>
                <Coffee size={16} weight='fill' className='icon' />
              </Icon>

              <strong>
                O café chega fresquinho até você
              </strong>
            </div>
          </FeaturesDiv>
        </div>

        <img src={CoffeHomeImg} alt="Coffe Delivery image simbólica" />
      </CoverContainer > */}

      <CoffesMenuContainer>
        <h1>Nossos Cafés</h1>
        <div className='coffes'>
          <Coffe imgSrc={CoffeImage} />
        </div>
      </CoffesMenuContainer>
    </>
  )
}