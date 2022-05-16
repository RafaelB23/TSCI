import React from "react";
import {
  HomePage,
  OrdersPage,
  NewOrderPage,
  OrderPage,
  NotFound,
  SignUp,
  Login,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { OrderProvider } from "./context/ordersContext";
// import { AuthProvider } from "./context/authContext";
import { NavBar, Footer } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="vh-100">
      {/* <AuthProvider> */}
        <OrderProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ordenes" element={<OrdersPage />} />
            <Route path="/orden" element={<NewOrderPage />} />
            <Route path="/orden/:id" element={<OrderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Footer />
        </OrderProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
