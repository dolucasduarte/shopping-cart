import {
  ProductsFeedWrapper,
  ProductsPlaceholder
} from "components/ProductFeed/ProductsFeed.style";
import ProductCard from "./ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "services/get";

function ProductsFeed() {
  const [products, setProducts] = useState();
  const [feedMessage, setFeedMessage] = useState("Loading ...");

  const renderProducts = () => {
    return products.map(product => {
      return <ProductCard product={product} />;
    });
  };

  useEffect(() => {
    getProducts(setProducts, setFeedMessage);
  }, []);

  return (
    <div>
      {products && products.length > 0 ? (
        <ProductsFeedWrapper>{renderProducts()}</ProductsFeedWrapper>
      ) : (
        <ProductsPlaceholder>{feedMessage}</ProductsPlaceholder>
      )}
    </div>
  );
}

export default ProductsFeed;
