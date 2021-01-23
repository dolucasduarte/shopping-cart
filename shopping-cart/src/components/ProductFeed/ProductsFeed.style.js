import styled from "styled-components";

const ProductsFeedWrapper = styled.div`
  box-sizing: border-box;

  padding-right: 2.5em;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  @media (max-width: 500px) {
    padding-right: 0;
    margin-bottom: 2em;
  }
`;

const ProductsPlaceholder = styled.div`
  width: 20em;
  height: 25em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #565656;
  font-weight: 600;
  line-height: 2em;
  text-align: center;
  margin-right: 2em;
`;

export { ProductsFeedWrapper, ProductsPlaceholder };
