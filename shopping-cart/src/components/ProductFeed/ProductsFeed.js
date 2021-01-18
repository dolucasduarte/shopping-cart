import { useState, useLayoutEffect } from "react";
import { getProducts } from "services/get";
import { ProductsFeedWrapper } from "components/ProductFeed/ProductsFeed.style";
import ProductCard from "../ProductCard/ProductCard";

function ProductsFeed() {
  const [products, setProducts] = useState();

  const renderProducts = () => {
    return products.map(product => {
      return <ProductCard product={product} />;
    });
  };

  useLayoutEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <ProductsFeedWrapper>
      {products && products.length > 0 && renderProducts()}
    </ProductsFeedWrapper>
  );
}

export default ProductsFeed;
