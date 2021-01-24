import styled, { css } from "styled-components";

const RowContainer = styled.div`
  height: 3em;
  padding: 0 1.5em 0 1.5em;
  border-top: 1px solid #b6b6b6;
  color: #656565;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.title === "Total" &&
    css`
      font-weight: 700;
    `}

  ${props =>
    props.title === "Discount" &&
    props.value < 0 &&
    css`
      color: #eb6868;
    `}
`;

export { RowContainer };
