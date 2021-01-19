import { HomeWrapper } from "./Home.style";
import ProductsFeed from "components/ProductFeed/ProductsFeed";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";

function Home() {
  return (
    <HomeWrapper>
      <ProductsFeed />
      <ShoppingCart />
    </HomeWrapper>
  );
}

export default Home;
