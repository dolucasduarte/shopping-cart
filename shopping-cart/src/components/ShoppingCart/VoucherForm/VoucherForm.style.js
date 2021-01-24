import styled from "styled-components";

const DiscountFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscountForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 2.3em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  align-self: center;
  margin-bottom: 0.5em;
`;

const VoucherInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  padding-left: 1em;
  border: 1px solid #edeff1;
  border-radius: 3px;
  margin-right: 1em;
`;

const VoucherButton = styled.button`
  width: 25%;
  background: #ff7149;
  border: none;
  border-radius: 5px;
  color: #ffff;
  text-transform: uppercase;

  &:hover {
    background: #ff9375;
  }
`;

const MessageContainer = styled.div`
  color: #565656;
  font-size: 0.8em;
  font-weight: 500;
  margin-bottom: 1.3em;
  margin-left: 1.5em;
`;

export {
  DiscountFormContainer,
  DiscountForm,
  VoucherInput,
  VoucherButton,
  MessageContainer
};
