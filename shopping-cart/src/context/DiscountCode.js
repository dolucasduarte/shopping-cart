import { createContext, useState } from "react";

const DiscountContext = createContext();

function DiscountProvider({ children }) {
  const [discountCode, setDiscountCode] = useState(0);

  return (
    <DiscountContext.Provider value={{ discountCode, setDiscountCode }}>
      {children}
    </DiscountContext.Provider>
  );
}

export default DiscountProvider;
export { DiscountContext };
