import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../context/ordersContext";

export function HomePage() {
  const { user } = useOrders();
  const navigate = useNavigate();

  console.log("User is: ", user);

  useEffect(() => {
    if (user.length !== 0) {
      navigate("/ordenes");
    }
  });
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="d-flex flex-column h-75 align-items-center justify-content-center">
      <h1 className="mt-4">Bienvenido</h1>
      <div className="container-sm text-center m-auto">
        <div className="col-md-5 m-auto">
          <button
            className="btn-lg btn-primary w-100 mb-4"
            type="button"
            onClick={handleLogin}
          >
            Inicia sesión
          </button>
        </div>
        <div className="col-md-5 m-auto">
          <button
            className="btn-lg btn-primary w-100"
            type="button"
            onClick={handleSignup}
          >
            Resgistrate
          </button>
        </div>
      </div>
    </div>
  );
}
