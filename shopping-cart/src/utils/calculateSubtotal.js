const calculateSubtotal = cartItens => {
  if (cartItens.length === 0) return 0;

  const subtotal = cartItens.reduce(function(prev, cur) {
    return prev + cur.product.price * cur.quantity;
  }, 0);

  return subtotal;
};

export default calculateSubtotal;
