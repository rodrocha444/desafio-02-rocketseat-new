import { MapPin } from 'phosphor-react'
import { Outlet, useNavigate } from 'react-router-dom';

import { ButtonCart } from '../../components/Buttons'

import { Content, Header, MainContainer } from "./styles"
import CoffeDeliveryLogo from '../../assets/coffe-delivery-logo.svg'



export function DefaultLayout() {
  const navigate = useNavigate();

  function redirectToCheckout() {
    navigate('../checkout')
  }

  function redirectToHome() {
    navigate('../')
  }

  return (
    <MainContainer>
      <Header>
        <img
          src={CoffeDeliveryLogo}
          alt="logotipo coffe delivery"
          className="logo"
          onClick={redirectToHome}
        />

        <nav>
          <button className='location'>
            <MapPin weight='fill' size={22} />
            Porto Alegre, RS
          </button>
          <ButtonCart onClick={redirectToCheckout} />
        </nav>
      </Header>

      <Content>
        <Outlet />
      </Content>

    </MainContainer>
  )
}