import CartProvider from "context/CartItens";
import Header from "components/Header/Header";
import PageWrapper from "./App.style";
import ProductFeed from "components/ProductFeed/ProductsFeed";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import GlobalStyles from "GlobalStyles";

function App() {
  return (
    <CartProvider>
      <Header />
      <PageWrapper>
        <ProductFeed />
        <ShoppingCart />
      </PageWrapper>
      <GlobalStyles />
    </CartProvider>
  );
}

export default App;
