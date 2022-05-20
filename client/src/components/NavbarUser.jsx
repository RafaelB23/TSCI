import React from "react";

export default function NavbarUser() {
  return (
    <div id="navUser">
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
  );
}
