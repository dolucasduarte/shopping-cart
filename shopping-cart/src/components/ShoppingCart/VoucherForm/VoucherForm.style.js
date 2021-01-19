import styled from "styled-components";

const DiscountForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 2.3em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 1em 0 1em 0;
  display: flex;
  align-self: center;
`;

const VoucherInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  margin-right: 1em;
  padding-left: 1em;
  border: 1px solid #edeff1;
  border-radius: 3px;
`;

const VoucherButton = styled.button`
  width: 25%;
  background: #fc7515;
  color: #ffff;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #f49f64;
  }
`;

export { DiscountForm, VoucherInput, VoucherButton };
