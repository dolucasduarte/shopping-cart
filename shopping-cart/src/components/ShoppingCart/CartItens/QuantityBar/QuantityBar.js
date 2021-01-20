import { BarContainer, Icon } from "./QuantityBar.style";
import addIcon from "assets/add-icon.svg";
import subtractIcon from "assets/subtract-icon.svg";
import { useCart } from "hooks/useCart";

function QuantityBar({ cartItem }) {
  const { cartItens, setCartItens } = useCart();

  const changeQuantity = direction => {
    if (cartItem.quantity === cartItem.product.available && direction === 1)
      return;
    if (cartItem.quantity === 1 && direction === -1) {
      return setCartItens(
        cartItens.filter(item => item.product.id !== cartItem.product.id)
      );
    }

    const itemIndex = cartItens.findIndex(
      item => item.product.id === cartItem.product.id
    );
    const newItensList = [...cartItens];
    newItensList[itemIndex] = {
      ...newItensList[itemIndex],
      quantity: newItensList[itemIndex].quantity + direction
    };
    return setCartItens(newItensList);
  };

  return (
    <BarContainer>
      <Icon src={addIcon} alt="add" onClick={() => changeQuantity(1)} />
      <Icon
        src={subtractIcon}
        alt="subtract"
        onClick={() => changeQuantity(-1)}
      />
    </BarContainer>
  );
}

export default QuantityBar;
