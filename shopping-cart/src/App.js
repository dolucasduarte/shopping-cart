import CartProvider from "context/CartItens";
import DiscountProvider from "context/DiscountCode";
import Header from "components/Header/Header";
import PageWrapper from "./App.style";
import ProductsFeed from "components/ProductFeed/ProductsFeed";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import GlobalStyles from "GlobalStyles";

function App() {
  return (
    <CartProvider>
      <DiscountProvider>
        <Header />
        <PageWrapper>
          <ProductsFeed />
          <ShoppingCart />
        </PageWrapper>
        <GlobalStyles />
      </DiscountProvider>
    </CartProvider>
  );
}

export default App;
