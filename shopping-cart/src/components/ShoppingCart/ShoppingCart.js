import {
  ShoppingCartContainer,
  ShoppingCartHeader
} from "./ShoppingCart.style";
import VoucherForm from "./VoucherForm/VoucherForm";
import CalculationRow from "./CalculationRow/CalculationRow";

function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <ShoppingCartHeader>
        <h2>Shopping Cart</h2>
      </ShoppingCartHeader>
      <VoucherForm />
      <CalculationRow title="Subtotal" value="234" />
      <CalculationRow title="Shipping" value="10" />
      <CalculationRow title="Discount" value="1" />
      <CalculationRow title="Total" value="243" />
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
