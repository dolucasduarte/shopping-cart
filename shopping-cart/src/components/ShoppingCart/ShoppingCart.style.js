import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  min-width: 23em;
  background: #fdfcfa;
  border-radius: 15px;
  box-shadow: 6px 7px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const ShoppingCartHeader = styled.div`
  width: 100%;
  background: #ff7149;
  border-radius: 15px 15px 0 0;
  color: #ffff;
  display: flex;
  justify-content: center;
`;

export { ShoppingCartContainer, ShoppingCartHeader };
