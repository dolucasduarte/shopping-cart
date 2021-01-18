import { HomeWrapper } from "./Home.style";
import ProductsFeed from "components/ProductFeed/ProductsFeed";

function Home() {
  return (
    <HomeWrapper>
      <ProductsFeed />
      <div>ShoppingCart</div>
    </HomeWrapper>
  );
}

export default Home;
