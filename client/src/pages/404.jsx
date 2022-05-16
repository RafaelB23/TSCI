import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export function NotFound() {
  useEffect(() => {
    const navUl = document.getElementById("navUl");
    const navForm = document.getElementById("navForm");

    navUl.style.visibility = "hidden";
    navForm.style.visibility = "hidden";
  });
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center h-75">
        <div className="d-flex flex-column align-items-center justify-content-center rounded">
          <div className="card align-items-center bg-light p-4">
            <FontAwesomeIcon className="text-danger" icon={faTriangleExclamation} size="4x" />
            <p className="fs-1 mb-2">404</p>
            <p className="mb-1">Lo sentimos, no podemos acceder a esta direccion</p>
            <p>Por favor regrese al menú de inicio</p>
          </div>
        </div>
      </div>
    </>
  );
}
