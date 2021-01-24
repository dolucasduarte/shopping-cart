import styled from "styled-components";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShoppingCartContainer = styled.div`
  min-width: 23em;
  background: #fdfcfa;
  border-radius: 15px;
  /* box-shadow: 6px 7px 3px rgba(0, 0, 0, 0.3); */
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2em;
`;

const ShoppingCartHeader = styled.div`
  width: 100%;
  background: #ff7149;
  border-radius: 15px 15px 0 0;
  color: #ffff;
  display: flex;
  justify-content: center;
`;

const CartButton = styled.button`
  width: 100%;
  height: 3.4em;
  background: #ff7149;
  color: #ffff;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  margin-top: 1em;
  font-size: 1em;

  &:hover {
    background: #ff9375;
  }
`;

export {
  GeneralContainer,
  ShoppingCartContainer,
  ShoppingCartHeader,
  CartButton
};
