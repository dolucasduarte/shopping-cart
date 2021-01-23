import api from "./api";

const getProducts = (setData, setErrorMessage) => {
  api
    .get("products.json")
    .then(response => {
      setData(response.data.products);
    })
    .catch(error => {
      setErrorMessage(
        "We had en error loading the products. Please, refresh the page"
      );
    });
};

const getVouchers = (setData, setErrorMessage, checkVoucher) => {
  api
    .get("vouchers.json")
    .then(response => {
      setData(response.data.vouchers);
      checkVoucher();
    })
    .catch(error => {
      setErrorMessage("We had an error loading the vouchers. Try again!");
    });
};

export { getProducts, getVouchers };
