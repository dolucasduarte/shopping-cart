import {
  EmptyCart,
  CartItemContainer,
  ItemImage,
  ItemContent,
  ItemTitle,
  ItemDetails
} from "./CartItens.style";
import QuantityBar from "./QuantityBar/QuantityBar";
import { useCart } from "hooks/useCart";

function CartItens() {
  const { cartItens } = useCart();

  const renderItens = () => {
    return cartItens.map(item => {
      return (
        <CartItemContainer>
          <ItemImage />
          <ItemContent>
            <ItemTitle>{item.product.name} </ItemTitle>
            <ItemDetails>
              <span>Quantity: {item.quantity} kg</span>
              <strong>${item.product.price * item.quantity}</strong>
            </ItemDetails>
          </ItemContent>
          <QuantityBar cartItem={item} />
        </CartItemContainer>
      );
    });
  };

  return (
    <div>
      {cartItens.length > 0 ? (
        renderItens()
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </div>
  );
}

export default CartItens;
