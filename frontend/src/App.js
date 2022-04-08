import "./App.css";
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import LogIn from "./components/auth/LogIn";
import ProductDashboard from "./components/products/ProductDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Container maxWidth={false}>
          <NavBar />
          <Container maxWidth={false}>
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/" element={<ProductDashboard />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
