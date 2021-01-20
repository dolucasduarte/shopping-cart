import { RowContainer } from "components/ShoppingCart/ShoppingCart.style";
import { useCart } from "hooks/useCart";

function SubtotalRow() {
  const { cartItens } = useCart();

  const renderSubtotal = () => {
    if (cartItens.length === 0) return <span>$ 0</span>;

    const subtotal = cartItens.reduce(function(prev, cur) {
      return prev + cur.product.price * cur.quantity;
    }, 0);

    return <span>$ {subtotal}</span>;
  };

  return (
    <RowContainer>
      <span>Subtotal</span>
      <span>{renderSubtotal()}</span>
    </RowContainer>
  );
}

export default SubtotalRow;
