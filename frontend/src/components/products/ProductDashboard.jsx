// import React, { useState } from "react";
// import ProductForm from "./ProductForm";
// import ProductList from "./ProductList";

// import { useSelector } from "react-redux";

// const ProductDashboard = () => {
//   const auth = useSelector((state) => state.auth);
//   const [todo, setTodo] = useState({
//     name: "",
//     price: "",
//     images: "",
//   });
//   return (
//     <>
//       {auth.id ? (
//         <>
//         <div className="col-md-12">
//           <ProductForm todo={todo} setTodo={setTodo} />
//           <ProductList todo={todo} setTodo={setTodo} />
//           </div>
//         </>

//       ) : (
//         <>
//           <ProductList todo={todo} setTodo={setTodo} />
//         </>
//       )}
//     </>
//   );
// };

// export default ProductDashboard;
import React from "react";

function ProductDashboard() {
  return <div>ProductDashboard</div>;
}

export default ProductDashboard;
