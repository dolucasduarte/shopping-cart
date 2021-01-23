import {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductCardButton
} from "components/ProductFeed/ProductCard/ProductCard.style";
import useCart from "hooks/useCart";
import addToCart from "utils/addToCart";
import findProductInCart from "utils/findProductInCart";
import handleMoney from "utils/handleMoney";

function ProductCard({ product }) {
  const { cartItens, setCartItens } = useCart();

  const renderAvailable = () => {
    const productInCart = findProductInCart(cartItens, product);
    if (!productInCart) return <em>{product.available}kg left</em>;
    return <em>{product.available - productInCart.quantity}kg left</em>;
  };

  const renderButton = () => {
    const productIsInCart = findProductInCart(cartItens, product);

    if (productIsInCart && product.available - productIsInCart.quantity === 0) {
      return (
        <ProductCardButton outOfStuck={true}> Out of stock</ProductCardButton>
      );
    }

    return (
      <ProductCardButton
        onClick={() => addToCart(cartItens, setCartItens, product)}
      >
        Buy
      </ProductCardButton>
    );
  };

  return (
    <ProductCardContainer>
      <ProductImage />
      <ProductContent>
        <h4>{product.name}</h4>
        <span>
          {handleMoney(product.price)}/kg | {renderAvailable()}
        </span>
      </ProductContent>
      {renderButton()}
    </ProductCardContainer>
  );
}

export default ProductCard;
