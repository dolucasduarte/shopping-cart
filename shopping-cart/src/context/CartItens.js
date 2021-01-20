import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([]);

  return (
    <CartContext.Provider value={{ cartItens, setCartItens }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
