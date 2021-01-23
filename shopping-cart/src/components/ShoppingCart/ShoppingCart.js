import {
  ShoppingCartContainer,
  ShoppingCartHeader
} from "./ShoppingCart.style";
import CartItens from "./CartItens/CartItens";
import VoucherForm from "./VoucherForm/VoucherForm";
import CalculationRow from "./CalculationRow/CalculationRow";
import useCart from "hooks/useCart";
import useDiscount from "hooks/useDiscountCode";
import calculateSubtotal from "utils/calculateSubtotal";
import calculateShipping from "utils/calculateShipping";
import calculateDiscount from "utils/calculateDiscount";

function ShoppingCart() {
  const { cartItens } = useCart();
  const { discountCode } = useDiscount();

  return (
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
        value={
          calculateSubtotal(cartItens) +
          calculateShipping(cartItens) +
          calculateDiscount(discountCode, cartItens)
        }
      />
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
