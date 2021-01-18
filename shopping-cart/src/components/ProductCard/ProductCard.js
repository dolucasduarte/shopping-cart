import {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductCardButton
} from "components/ProductCard/ProductCard.style";

function ProductCard({ product }) {
  return (
    <ProductCardContainer>
      <ProductImage />
      <ProductContent>
        <h4>{product.name}</h4>
        <span>
          ${product.price}/kg - <em>{product.available} left</em>
        </span>
      </ProductContent>
      <ProductCardButton>Buy</ProductCardButton>
    </ProductCardContainer>
  );
}

export default ProductCard;
