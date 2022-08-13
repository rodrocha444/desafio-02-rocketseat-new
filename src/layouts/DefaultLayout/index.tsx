import { MapPin } from 'phosphor-react'

import { ButtonCart } from '../../components/Buttons'
import { Header, MainContainer } from "./styles";
import CoffeDeliveryLogo from '../../assets/coffe-delivery-logo.svg';

export function DefaultLayout() {
  return (
    <MainContainer>
      <Header>
        <img src={CoffeDeliveryLogo} alt="logotipo coffe delivery" className="logo" />

        <nav>
          <button className='location'>
            <MapPin weight='fill' size={22} />
            Porto Alegre, RS
          </button>
          <ButtonCart />
        </nav>
      </Header>
    </MainContainer>
  )
}