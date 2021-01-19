import { RowContainer } from "./CalculationRow.style";

function CalculationRow({ title, value }) {
  return (
    <RowContainer>
      <span>{title}</span>
      <span>{value}</span>
    </RowContainer>
  );
}

export default CalculationRow;
