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
  margin-right: 1em;
  padding-left: 1em;
  border: 1px solid #edeff1;
  border-radius: 3px;
`;

const VoucherButton = styled.button`
  width: 25%;
  background: #ff7149;
  color: #ffff;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #ff9375;
  }
`;

const MessageContainer = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-bottom: 1.3em;
  margin-left: 1.5em;
  color: #565656;
`;

export {
  DiscountFormContainer,
  DiscountForm,
  VoucherInput,
  VoucherButton,
  MessageContainer
};
