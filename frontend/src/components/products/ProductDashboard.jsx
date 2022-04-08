import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const ProductDashboard = () => {
  const auth = useSelector((state) => state.auth);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    id: "",
  });

  return (
    <>
      {auth.id ? (
        <>
          <div>
            <ProductForm
              product={product}
              setProduct={setProduct}
            ></ProductForm>
            <ProductList
              product={product}
              setProduct={setProduct}
            ></ProductList>
          </div>
        </>
      ) : (
        <>
          <ProductList product={product} setProduct={setProduct}></ProductList>
        </>
      )}
    </>
  );
};
export default ProductDashboard;
