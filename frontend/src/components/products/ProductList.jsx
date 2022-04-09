import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Product from "./Product";

const ProductList = ({ product, setProduct }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
  }, [product.id, dispatch]);

  console.log(productList, product, auth);
  return (
    <div className="row">
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
