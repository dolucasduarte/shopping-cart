const removeFromCart = (cartItens, setCartItens, product) => {
  if (product.quantity === 1) {
    const cartWithItemRemoved = cartItens.filter(
      item => item.product.id !== product.product.id
    );
    return setCartItens(cartWithItemRemoved);
  }

  const itemIndex = cartItens.findIndex(
    item => item.product.id === product.product.id
  );

  const newItensList = [...cartItens];
  newItensList[itemIndex] = {
    ...newItensList[itemIndex],
    quantity: newItensList[itemIndex].quantity - 1
  };
  return setCartItens(newItensList);
};

export default removeFromCart;
