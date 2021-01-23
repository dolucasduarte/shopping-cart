import calculateSubtotal from "./calculateSubtotal";
import calculateShipping from "./calculateShipping";

const calculateDiscount = (discountCode, cartItens) => {
  if (!discountCode) return 0;
  if (cartItens.length === 0) return 0;

  const subtotal = calculateSubtotal(cartItens);
  const shipping = calculateShipping(cartItens);

  if (discountCode.type === "fixed" && discountCode.amount <= subtotal) {
    return -discountCode.amount;
  }

  if (discountCode.type === "percentual")
    return -(subtotal / 100) * discountCode.amount;

  if (discountCode.type === "shipping" && subtotal > discountCode.minValue)
    return -shipping;

  return 0;
};

export default calculateDiscount;
