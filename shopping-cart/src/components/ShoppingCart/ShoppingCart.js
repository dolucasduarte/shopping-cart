import {
  GeneralContainer,
  ShoppingCartContainer,
  ShoppingCartHeader,
  CartButton
} from "./ShoppingCart.style";
import CartItens from "./CartItens/CartItens";
import VoucherForm from "./VoucherForm/VoucherForm";
import CalculationRow from "./CalculationRow/CalculationRow";
import useCart from "hooks/useCart";
import useDiscount from "hooks/useDiscountCode";
import calculateSubtotal from "utils/calculateSubtotal";
import calculateShipping from "utils/calculateShipping";
import calculateDiscount from "utils/calculateDiscount";
import calculateTotal from "utils/calculateTotal";

function ShoppingCart() {
  const { cartItens } = useCart();
  const { discountCode } = useDiscount();

  const checkOut = () => {
    alert(
      "Thank you for using Fruits4You. Learn about me in: dolucasduarte.com"
    );
  };

  return (
    <GeneralContainer>
      <ShoppingCartContainer>
        <ShoppingCartHeader>
          <h2>Shopping Cart</h2>
        </ShoppingCartHeader>
        <CartItens />
        <VoucherForm />
        <CalculationRow title="Subtotal" value={calculateSubtotal(cartItens)} />
        <CalculationRow title="Shipping" value={calculateShipping(cartItens)} />
        <CalculationRow
          title="Discount"
          value={calculateDiscount(discountCode, cartItens)}
        />
        <CalculationRow
          title="Total"
          value={calculateTotal(cartItens, discountCode)}
        />
      </ShoppingCartContainer>
      <CartButton onClick={() => checkOut()}>Checkout </CartButton>
    </GeneralContainer>
  );
}

export default ShoppingCart;
