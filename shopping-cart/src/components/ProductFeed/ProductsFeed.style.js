import styled from "styled-components";

const ProductsFeedWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding-right: 2.5em;

  @media (max-width: 500px) {
    margin-bottom: 2em;
    padding-right: 0;
  }
`;

export { ProductsFeedWrapper };
