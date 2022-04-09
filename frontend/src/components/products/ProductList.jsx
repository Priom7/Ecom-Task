import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import Product from "./Product";

const ProductList = ({ product, setProduct }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState({
    searchKey: "",
  });
  useEffect(() => {
    dispatch(getProducts());
  }, [product.id, dispatch]);

  const handleBlur = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      dispatch(searchProduct(searchKey));
      console.log("nav", productList);
    }
  };
  console.log(productList, product, auth);
  return (
    <div className="row">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            Search 🔍
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Search for products..."
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) =>
            setSearchKey({ ...searchKey, searchKey: e.target.value })
          }
          onBlur={handleBlur}
          onKeyDown={handleBlur}
        />
      </div>

      {productList &&
        productList.map((product) => {
          return (
            <Product
              product={product}
              productList={productList}
              key={product.id}
              setProduct={setProduct}
            ></Product>
          );
        })}
    </div>
  );
};
export default ProductList;
