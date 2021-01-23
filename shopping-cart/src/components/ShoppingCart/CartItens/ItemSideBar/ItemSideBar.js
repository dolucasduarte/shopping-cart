import { BarContainer, Icon } from "./ItemSideBar.style";
import useCart from "hooks/useCart";
import addToCart from "utils/addToCart";
import removeFromCart from "utils/removeFromCart";
import addIcon from "assets/add-icon.svg";
import subtractIcon from "assets/subtract-icon.svg";

function ItemSideBar({ item }) {
  const { cartItens, setCartItens } = useCart();

  return (
    <BarContainer>
      <Icon
        src={addIcon}
        alt="add"
        onClick={() => addToCart(cartItens, setCartItens, item.product)}
      />
      <Icon
        src={subtractIcon}
        alt="subtract"
        onClick={() => removeFromCart(cartItens, setCartItens, item)}
      />
    </BarContainer>
  );
}

export default ItemSideBar;
