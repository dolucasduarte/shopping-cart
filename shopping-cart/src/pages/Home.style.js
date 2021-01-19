import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { HomeWrapper };
