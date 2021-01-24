import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3em;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default PageWrapper;
