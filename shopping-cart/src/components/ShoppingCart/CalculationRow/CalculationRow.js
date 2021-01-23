import { RowContainer } from "./CalculationRow.style";
import handleMoney from "utils/handleMoney";

function SubtotalRow({ title, value }) {
  return (
    <RowContainer title={title} value={value}>
      <span>{title}</span>
      <span>{handleMoney(value)}</span>
    </RowContainer>
  );
}

export default SubtotalRow;
