const handleMoney = number => {
  const money = number.toFixed(2).replace(".", ",");
  return `$ ${money}`;
};

export default handleMoney;
