import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useOrders } from "../context/ordersContext";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();

  const { user } = useOrders();
  useEffect(() => {
    const path = document.location.pathname;
    const navUl = document.getElementById("navUl");
    const navForm = document.getElementById("navForm");
    // const refNav = document.getElementById("refInicio");

    if (path === "/signup" || path === "/login" || path === "/") {
      navUl.style.visibility = "hidden";
      navForm.style.visibility = "hidden";
    } else {
      navUl.style.visibility = "visible";
      navForm.style.visibility = "visible";
    }
  });
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary mt-auto"
      id="navBar"
    >
      <div className="container container-fluid">
        <p
          type="button"
          className="navbar-brand m-0 p-0 pe-3"
          id="refInicio"
          onClick={() => {
            if (user.length !== 0) {
              navigate("/ordenes")
            } else {
              navigate("/")
            }
          }}
        >
          TSCI
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navUl">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/ordenes"
              >
                Ordenes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/inventario">
                Inventario
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/sucursal"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sucursal
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/operadores">
                    Operadores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/maquinas">
                    Maquinaria
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/facturas">
                    Facturas
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div id="navForm">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Numero de orden"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
