const productReducer = (productList = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.productList;
    default:
      return productList;
  }
};

export default productReducer;
