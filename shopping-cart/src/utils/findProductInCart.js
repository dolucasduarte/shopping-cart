const findProductInCart = (cartItens, product) => {
  const productInCart = cartItens.find(item => item.product.id === product.id);
  return productInCart;
};

export default findProductInCart;
