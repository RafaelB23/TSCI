import React from "react";

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Empresa
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" id='navInicio' aria-current="page" href="/">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='Ordenar' href="/order">
                                Ordenar
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
                                href="/planta"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Planta
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="/operadores">
                                        Operadores
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/maquinas">
                                        Maquinas
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/about">
                                        Algo más
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
