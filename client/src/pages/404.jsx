import React from "react";

export function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center rounded mt-4">
        <div className="card align-items-center bg-light p-4">
          <p className="fs-1">404</p>
          <p>Lo sentimos, no podemos acceder a esta direccion</p>
          <p>Por favor regrece al menu de inicio</p>
        </div>
      </div>
    </>
  );
}
