import calculateSubtotal from "./calculateSubtotal";
import calculateShipping from "./calculateShipping";
import calculateDiscount from "./calculateDiscount";

const calculateTotal = (cartItens, discountCode) => {
  return (
    calculateSubtotal(cartItens) +
    calculateShipping(cartItens) +
    calculateDiscount(discountCode, cartItens)
  );
};

export default calculateTotal;
