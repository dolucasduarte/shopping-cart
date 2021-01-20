import {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductCardButton
} from "components/ProductCard/ProductCard.style";
import { useCart } from "hooks/useCart";
import findProductInCart from "utils/findProductInCart";

function ProductCard({ product }) {
  const { cartItens, setCartItens } = useCart();

  const addToCart = () => {
    const itemIndex = cartItens.findIndex(
      item => item.product.id === product.id
    );

    if (itemIndex !== -1) {
      const newItensList = [...cartItens];
      newItensList[itemIndex] = {
        ...newItensList[itemIndex],
        quantity: newItensList[itemIndex].quantity + 1
      };
      return setCartItens(newItensList);
    }

    const cartItem = {
      product,
      quantity: +1
    };

    return setCartItens([...cartItens, cartItem]);
  };

  const renderAvailable = () => {
    const productInCart = findProductInCart(cartItens, product);

    if (!productInCart) {
      return <em>{product.available}kg left</em>;
    }

    return <em>{product.available - productInCart.quantity}kg left</em>;
  };

  const renderButton = () => {
    const productInCart = findProductInCart(cartItens, product);

    if (productInCart && product.available - productInCart.quantity === 0) {
      return (
        <ProductCardButton outOfStock={true}> Out of stock</ProductCardButton>
      );
    }

    return (
      <ProductCardButton onClick={() => addToCart()}>Buy</ProductCardButton>
    );
  };

  return (
    <ProductCardContainer>
      <ProductImage />
      <ProductContent>
        <h4>{product.name}</h4>
        <span>
          ${product.price}/kg | {renderAvailable()}
        </span>
      </ProductContent>
      {renderButton()}
    </ProductCardContainer>
  );
}

export default ProductCard;
