import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  var userState = false;

  useEffect(() => {
    if (userState) {
      navigate("/ordenes");
    }
  });
  const handleLogin=(()=>{
    navigate("/login");
  })
  const handleSignup=(()=>{
    navigate("/signup");
  })
  return (
    <div className="d-flex flex-column h-75 align-items-center justify-content-center">
      <div
        className="container text-center m-auto g-5 h-100"
        style={{ width: "30%" }}
      >
        <h1 className="mt-4">Bienvenido</h1>
        <div className="d-flex align-items-center h-75">
        <div className="d-grid gap-4 col-8 mx-auto">
          <button className="btn btn-primary" type="button" onClick={handleLogin}>
            Inicia sesión
          </button>
          <button className="btn btn-primary" type="button" onClick={handleSignup}>
            Resgistrate
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
