import { useContext } from "react";
import { CartContext } from "context/CartItens";

function useCart() {
  const context = useContext(CartContext);
  const { cartItens, setCartItens } = context;
  return { cartItens, setCartItens };
}

export { useCart };
