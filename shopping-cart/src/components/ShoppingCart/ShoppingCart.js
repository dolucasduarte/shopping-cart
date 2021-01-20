import {
  ShoppingCartContainer,
  ShoppingCartHeader
} from "./ShoppingCart.style";
import VoucherForm from "./VoucherForm/VoucherForm";
import SubtotalRow from "./SubtotalRow/SubtotalRow";
import CalculationRow from "./CalculationRows/CalculationRow";
import CartItens from "./CartItens/CartItens";
import ShippingRow from "./ShippingRow/ShippingRow";

function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <ShoppingCartHeader>
        <h2>Shopping Cart</h2>
      </ShoppingCartHeader>
      <CartItens />
      <VoucherForm />
      <SubtotalRow />
      <ShippingRow />
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
