import findProductInCart from "./findProductInCart";

const addToCart = (cartItens, setCartItens, product) => {
  const productIsInCart = findProductInCart(cartItens, product);
  const itemIndex = cartItens.findIndex(item => item.product.id === product.id);

  if (productIsInCart) {
    if (product.available - productIsInCart.quantity === 0) return;

    const newItensList = [...cartItens];

    newItensList[itemIndex] = {
      ...newItensList[itemIndex],
      quantity: newItensList[itemIndex].quantity + 1
    };

    return setCartItens(newItensList);
  }

  const cartItem = {
    product,
    quantity: +1
  };

  return setCartItens([...cartItens, cartItem]);
};

export default addToCart;
