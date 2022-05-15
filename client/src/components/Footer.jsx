import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div>
      <div className="container mt-auto">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              TSCI
            </a>
            <span className="text-muted">© 2021 RAMB, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="/social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
