import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  width: 25em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #fdfcfa;
`;

const ShoppingCartHeader = styled.div`
  width: 100%;
  background: #fc7515;
  border-radius: 15px 15px 0 0;
  color: #ffff;
  display: flex;
  justify-content: center;
`;

export { ShoppingCartContainer, ShoppingCartHeader };
