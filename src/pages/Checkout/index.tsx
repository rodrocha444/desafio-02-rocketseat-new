import { CheckoutContainer } from "./styles";
import NumberFormat from "react-number-format";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <div>
          <h2>Complete seu pedido </h2>

          <div>
            <span>icon</span>
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>

            <NumberFormat
              displayType="input"
              value={10}
              inputMode="text"
              name=""
            />

          </div>
        </div>

        <div>
          <h2>Cafés selecionados</h2>

        </div>
      </form>

    </CheckoutContainer>
  )
}