import { ButtonLabelStyled, CheckoutContainer, Divider, Title, TotalContainer } from "./styles";
import NumberFormat from "react-number-format";
import { SelectOption } from "../../components/SelectOption";
import { ButtonLabel } from "../../components/Buttons";
import { Bank, CreditCard, Money, MapPinLine, CurrencyDollar } from "phosphor-react";
import { DescriptionWithIcon } from "./components/DescriptionWithIcon";
import { CoffeCart } from "./components/CoffeCart";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <div className="infos">
          <Title>Complete seu pedido</Title>

          <section className="address-and-pay">
            <DescriptionWithIcon
              iconColor="#C47F17"
              Icon={<MapPinLine size={22} />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
            <div className="data">
              <NumberFormat
                displayType="input"
                inputMode="text"
                name=""
                placeholder="CEP"
                mask="_"
                format="#####-###"
                className="cep"
              />
              <input type="text" placeholder="Rua" className="rua" />
              <input type="number" placeholder="Numero" className="numero" />
              <input type="text" placeholder="Complemento" className="complemento" />
              <input type="text" placeholder="Bairro" className="bairro" />
              <input type="text" placeholder="Cidade" className="cidade" />
              <input type="text" placeholder="UF" className="uf" maxLength={2} />
            </div>


          </section>

          <section className="address-and-pay">
            <DescriptionWithIcon
              iconColor="#8047F8"
              Icon={<CurrencyDollar size={22} />}
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
            />
            <div className="options">
              <SelectOption
                icon={<CreditCard />}
                onClick={() => { }}
                selected={false}
                textContent="Cartão de Crédito"
              />
              <SelectOption
                icon={<Bank />}
                onClick={() => { }}
                selected={false}
                textContent="Cartão de Débito"
              />
              <SelectOption
                icon={<Money />}
                onClick={() => { }}
                selected={false}
                textContent="Dinheiro"
              />
            </div>
          </section>
        </div>

        <section className="cart">
          <Title>Cafés selecionados</Title>
          <div className="address-and-pay">
            <CoffeCart srcImage="/src/assets/coffes-imgs/image.png" />
            <Divider />
            <CoffeCart srcImage="/src/assets/coffes-imgs/image.png" />
            <Divider />

            <TotalContainer>
              <span className="normalText">
                <p>Total de itens</p>
                <NumberFormat
                  decimalSeparator=','
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType='text'
                  value={9.9}
                  className='value'
                  prefix="R$ "
                />
              </span>
              <span className="normalText">
                <p>Entrega</p>
                <NumberFormat
                  decimalSeparator=','
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType='text'
                  value={9.9}
                  className='value'
                  prefix="R$ "
                />
              </span>
              <span className="especialText">
                <strong>Total</strong>
                <NumberFormat
                  decimalSeparator=','
                  decimalScale={2}
                  fixedDecimalScale={true}
                  displayType='text'
                  value={9.9}
                  className='value'
                  prefix="R$ "
                />
              </span>
            </TotalContainer>
            <ButtonLabelStyled>
              Confirmar Pedido
            </ButtonLabelStyled>

          </div>
        </section>
      </form>

    </CheckoutContainer>
  )
}