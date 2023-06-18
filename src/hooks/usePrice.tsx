import { createContext, useState } from "react";

const priceContext = createContext({
  price: 0,
  setPriceHandler: (price: number) => {}
});

const priceContextProvider = ({ children }, Price: number, Rate: number) => {
  const [price, setPrice] = useState(0);

  const setPriceHandler = (price: number) => setPrice(price=Price*Rate/100);

  return (
    <priceContext.Provider value={{ price, setPriceHandler }}>
      {children}
    </priceContext.Provider>
  );
};

export default priceContextProvider;
