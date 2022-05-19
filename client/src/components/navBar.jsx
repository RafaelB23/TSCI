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
      document.getElementById("btnMenu").style.visibility = "hidden"
    } else {
      navUl.style.visibility = "visible";
      navForm.style.visibility = "visible";
      document.getElementById("btnMenu").style.visibility = "visible"

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
              navigate("/ordenes");
            } else {
              navigate("/");
            }
          }}
        >
          TSCI
        </p>
        <button
          className="navbar-toggler"
          id="btnMenu"
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
                id="ordenes"
                aria-current="page"
                href="/ordenes"
              >
                Ordenes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/inventario" id="inventario">
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
                  <a className="dropdown-item" href="/sucursales" id="sucursales">
                    Sucursales
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/operadores"
                    id="operadores"
                  >
                    Operadores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/maquinas" id="maquinaria">
                    Maquinaria
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/facturas"
                id="facturas"
                aria-current="page"
              >
                Facturas
              </a>
            </li>
          </ul>
          <div id="navForm">{disableInput()}</div>

          <ul className="navbar-nav me-0 mt-2 mb-lg-0" id="navUl">
            <div className="dropdown dropdown-item bg-primary ms-0 col-lg-4 px-0">
              <a
                href="/"
                className="d-block link-dark text-decoration-none dropdown-toggle list-inline text-white"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle list-inline-item"
                />
                <p className="list-inline-item text-white">Usuario</p>
              </a>
              <ul
                className="dropdown-menu text-small dropdown-menu-end"
                aria-labelledby="dropdownUser1"
                data-popper-placement="bottom-end"
              >
                <li>
                  <a className="dropdown-item" href="/user">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/signout">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function disableInput() {
  const path = document.location.pathname;
  if (path.includes("/ordenes") || path.includes("/inventario")) {
    return (
      <form className="d-flex me-0 me-lg-4">
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Numero de orden"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </button>
      </form>
    );
  }
  if (path.includes("/operadores")) {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Nombre del operador"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </button>
      </form>
    );
  }
  if (path.includes("/maquinas")) {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Nombre maquina"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </button>
      </form>
    );
  }
}
