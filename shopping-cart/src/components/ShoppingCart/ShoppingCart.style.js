import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  min-width: 23em;
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

const RowContainer = styled.div`
  height: 3em;
  border-top: 1px solid #b6b6b6;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em 0 0.5em;
  color: #656565;
`;

export { ShoppingCartContainer, ShoppingCartHeader, RowContainer };
