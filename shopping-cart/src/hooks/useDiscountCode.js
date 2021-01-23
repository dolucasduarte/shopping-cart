import { useContext } from "react";
import { DiscountContext } from "context/DiscountCode";

function useDiscount() {
  const context = useContext(DiscountContext);
  const { discountCode, setDiscountCode } = context;
  return { discountCode, setDiscountCode };
}

export default useDiscount;
