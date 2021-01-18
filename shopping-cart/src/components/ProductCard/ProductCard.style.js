import styled from "styled-components";
import productImage from "assets/product.png";

const ProductCardContainer = styled.div`
  width: 12em;
  background: #ffff;
  border-radius: 15px 15px 15px 15px;
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
    font-weight: 500;
    margin: auto;
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
  background: #fc7515;
  color: #ffff;
  border: none;
  text-transform: uppercase;
  border-radius: 0 0 15px 15px;
  margin-top: 1em;
`;

export {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductCardButton
};
