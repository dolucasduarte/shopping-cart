import api from "./api";

const getProducts = setData => {
  api
    .get("products.json")
    .then(response => {
      setData(response.data.products);
    })
    .catch(error => {
      alert(error);
    });
};

export { getProducts };
