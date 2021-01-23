import styled from "styled-components";
import productImage from "assets/product.png";

const EmptyCart = styled.div`
  color: #656565;
  text-align: center;
  margin: 2em;
`;

const CartItemContainer = styled.div`
  height: 4em;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  display: flex;
  margin: 1em;
`;

const ItemImage = styled.div`
  height: 100%;
  width: 20%;
  background-image: url(${productImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ItemContent = styled.div`
  box-sizing: border-box;
  width: 70%;
  padding-left: 1em;
  padding-right: 1em;
  color: #2c2c2c;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemTitle = styled.span`
  font-weight: 600;
`;

const ItemDetails = styled.span`
  width: 100%;
  font-weight: 400;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  strong {
    font-weight: 600;
    font-size: 1.1em;
  }
`;

export {
  EmptyCart,
  CartItemContainer,
  ItemImage,
  ItemContent,
  ItemTitle,
  ItemDetails
};
