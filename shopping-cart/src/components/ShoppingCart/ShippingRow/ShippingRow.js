import { RowContainer } from "components/ShoppingCart/ShoppingCart.style";
import { useCart } from "hooks/useCart";

function ShippingRow() {
  const { cartItens } = useCart();

  const renderShipping = () => {
    if (cartItens.length === 0) return <span>$ 0</span>;

    const subtotal = cartItens.reduce(function(prev, cur) {
      return prev + cur.product.price * cur.quantity;
    }, 0);

    if (subtotal > 400000) return <span>$ 0</span>;

    const weight = cartItens.reduce(function(prev, cur) {
      return prev + cur.quantity;
    }, 0);

    if (weight <= 10) return <span>$ 30</span>;
  };

  return (
    <RowContainer>
      <span>Shipping</span>
      <span>{renderShipping()}</span>
    </RowContainer>
  );
}

export default ShippingRow;
