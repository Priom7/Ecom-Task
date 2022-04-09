import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import Product from "./Product";
import Pagination from "react-js-pagination";
const ProductList = ({ product, setProduct }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.data);
  const paginationData = useSelector((state) => state.products);
  console.log("Daa", paginationData);
  const auth = useSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState({
    searchKey: "",
  });
  const [page, setActivePage] = useState({
    page: 1,
  });
  useEffect(() => {
    dispatch(getProducts(page));
  }, [product.id, dispatch, page.page]);

  const handleBlur = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProduct(searchKey));
    }
  };
  const handlePageChange = (pageNumber) => {
    setActivePage({ page: pageNumber });
  };
  console.log(productList, product, auth);
  return (
    <div className="row">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search 🔍
          </span>
        </div>
        <input
          type="text"
          className="form-control"
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
      <div>
        {productList && (
          <Pagination
            activePage={paginationData.current_page}
            itemsCountPerPage={paginationData.per_page}
            totalItemsCount={paginationData.total}
            pageRangeDisplayed={paginationData.last_page}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
          />
        )}
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

      <div></div>
    </div>
  );
};
export default ProductList;
