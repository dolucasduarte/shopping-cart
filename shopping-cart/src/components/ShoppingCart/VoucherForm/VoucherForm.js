import { DiscountForm, VoucherInput, VoucherButton } from "./VoucherForm.style";

function VoucherForm() {
  return (
    <DiscountForm>
      <VoucherInput placeholder="Discount code" />
      <VoucherButton>Apply</VoucherButton>
    </DiscountForm>
  );
}

export default VoucherForm;
