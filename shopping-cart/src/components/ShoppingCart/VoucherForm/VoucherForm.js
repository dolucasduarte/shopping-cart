import {
  DiscountFormContainer,
  DiscountForm,
  VoucherInput,
  VoucherButton,
  MessageContainer
} from "./VoucherForm.style";
import { useState, useEffect } from "react";
import useForm from "hooks/useForm";
import useDiscount from "hooks/useDiscountCode";
import { getVouchers } from "services/get";

function VoucherForm() {
  const [vouchers, setVouchers] = useState([]);
  const [submittedVoucher, setSubmittedVoucher] = useState();
  const [formMessage, setFormMessage] = useState("");

  const { setDiscountCode } = useDiscount();
  const { form, onChange } = useForm({
    discountCode: ""
  });

  const submitVoucher = async event => {
    event.preventDefault();
    setSubmittedVoucher(form.discountCode);
    if (vouchers.length === 0)
      return await getVouchers(setVouchers, setFormMessage);
  };

  useEffect(() => {
    const checkVouchers = () => {
      const findVoucher = vouchers.find(item => item.code === submittedVoucher);
      if (!findVoucher) {
        setDiscountCode(submittedVoucher);
        return setFormMessage("✘ Voucher not found");
      }
      setDiscountCode(findVoucher);
      setFormMessage("✔ Discount applied. Check voucher conditions.");
    };
    if (vouchers.length > 0) return checkVouchers();
  }, [vouchers, submittedVoucher, setDiscountCode]);

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
