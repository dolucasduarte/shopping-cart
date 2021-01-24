import api from "./api";

const getProducts = (setData, setErrorMessage) => {
  api
    .get("products.json")
    .then(response => {
      setData(response.data.products);
    })
    .catch(error => {
      setErrorMessage(
        "There was an error loading the products. Please, refresh the page"
      );
    });
};

const getVouchers = (setData, setErrorMessage) => {
  api
    .get("vouchers.json")
    .then(response => {
      setData(response.data.vouchers);
    })
    .catch(error => {
      setErrorMessage("✘ There was an error loading the vouchers. Try again!");
    });
};

export { getProducts, getVouchers };
