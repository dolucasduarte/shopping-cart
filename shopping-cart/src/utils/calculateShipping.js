import calculateSubtotal from "./calculateSubtotal";

const calculateShipping = cartItens => {
  if (cartItens.length === 0) return 0;

  const subtotal = calculateSubtotal(cartItens);

  if (subtotal > 400000) return 0;

  const totalWeight = cartItens.reduce(function(prev, cur) {
    return prev + cur.quantity;
  }, 0);

  if (totalWeight <= 10) return 30;

  const exceedingWeight = totalWeight - 10;
  const exceedingFee = Math.floor(exceedingWeight / 5) * 7;

  return 30 + exceedingFee;
};

export default calculateShipping;
