import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import coffes, { CoffeProps } from './data/coffes'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export interface CartCoffeProps extends CoffeProps {
  units: number;
}
interface CartContextProps {
  cart: CartCoffeProps[]
  addToCart: (id: number, units: number) => void
}
export const CartContext = createContext({} as CartContextProps)

export function Router() {
  const [cart, setCart] = useState<CartCoffeProps[]>([])

  function addToCart(id: number, units: number) {
    setCart(previousCart => {
      const inCart = previousCart.findIndex(coffe => coffe.id === id) !== -1 ? true : false;

      if (inCart) {
        const newState = previousCart.map(coffe => (
          coffe.id === id
            ? { ...coffe, units: coffe.units + units }
            : coffe
        ))

        return newState
      }
      else {
        const newCoffe = {
          ...coffes.find(coffe => coffe.id === id)!,
          units,
        }
        return [
          ...previousCart,
          newCoffe
        ]
      }

    })
  }

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, addToCart }}>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}