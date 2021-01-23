import styled from "styled-components";

const BarContainer = styled.div`
  width: 10%;
  border-left: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  box-sizing: border-box;
  height: 50%;
  width: 100%;
  padding: 0.7em;
  cursor: pointer;

  &:hover {
    background: #e5e5e5;
  }

  &:active {
    padding: 0.8em;
  }
`;

export { BarContainer, Icon };
