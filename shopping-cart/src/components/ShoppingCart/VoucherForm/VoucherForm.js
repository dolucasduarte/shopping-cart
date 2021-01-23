import {
  DiscountFormContainer,
  DiscountForm,
  VoucherInput,
  VoucherButton,
  MessageContainer
} from "./VoucherForm.style";
import { useState } from "react";
import useForm from "hooks/useForm";
import useDiscount from "hooks/useDiscountCode";
import { getVouchers } from "services/get";

function VoucherForm() {
  const [vouchers, setVouchers] = useState([]);
  const [formMessage, setFormMessage] = useState("");

  const { setDiscountCode } = useDiscount();
  const { form, onChange } = useForm({
    discountCode: ""
  });

  const submitVoucher = async event => {
    event.preventDefault();
    await getVouchers(setVouchers, setFormMessage, checkVoucher);
  };

  const checkVoucher = () => {
    const findVoucher = vouchers.find(item => item.code === form.discountCode);
    if (!findVoucher) {
      setDiscountCode(form.discountCode);
      return setFormMessage("Voucher not found");
    }
    setDiscountCode(findVoucher);
    setFormMessage("Discount applied. Check voucher conditions.");
  };

  return (
    <DiscountFormContainer>
      <DiscountForm onSubmit={submitVoucher}>
        <VoucherInput
          id="discountCode"
          name="discountCode"
          type="text"
          placeholder="Discount Code"
          onChange={onChange}
          value={form.discountCode}
          required
        />
        <VoucherButton>Apply</VoucherButton>
      </DiscountForm>
      <MessageContainer>{formMessage}</MessageContainer>
    </DiscountFormContainer>
  );
}

export default VoucherForm;
