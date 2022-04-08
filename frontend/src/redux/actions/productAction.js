import axios from "axios";
import { url, setHeaders } from "../../api_connection/api";
import { toast } from "react-toastify";

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(`${url}/products`, setHeaders())
      .then((products) => {
        var productList = products.data.data;
        dispatch({
          type: "GET_PRODUCTS",
          productList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
