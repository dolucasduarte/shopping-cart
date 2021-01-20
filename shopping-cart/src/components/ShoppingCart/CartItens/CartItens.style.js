import styled from "styled-components";
import productImage from "assets/product.png";

const EmptyCart = styled.div`
  margin: 2em;
  text-align: center;
  color: #656565;
`;

const CartItemContainer = styled.div`
  display: flex;
  height: 4em;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1em;
  padding-right: 1em;
`;

const ItemTitle = styled.span`
  font-weight: 600;
`;

const ItemDetails = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 400;
  font-size: 0.8em;

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
