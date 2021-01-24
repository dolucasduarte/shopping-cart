import styled, { css } from "styled-components";
import productImage from "assets/product.png";

const ProductCardContainer = styled.div`
  width: 12em;
  background: #fdfcfa;
  border-radius: 15px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
`;

const ProductImage = styled.div`
  width: 100%;
  height: 8em;
  background-image: url(${productImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px 15px 0 0;
`;

const ProductContent = styled.article`
  margin-left: 1em;

  h4 {
    color: #2c2c2c;
    font-weight: 500;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  span {
    font-weight: 300;
    color: #656565;
  }
`;

const ProductCardButton = styled.button`
  width: 100%;
  height: 3em;
  background: #ff7149;
  border: none;
  border-radius: 0 0 15px 15px;
  color: #ffff;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1em;

  &:hover {
    background: #ff9375;
  }

  ${props =>
    props.outOfStuck &&
    css`
      background: #656565;
      &:hover {
        background: #656565;
        cursor: not-allowed;
      }
    `}
`;

export {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductCardButton
};
