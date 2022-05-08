import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  const userState = false;

  useEffect(() => {
    if (!userState) {
      navigate("/ordenes");
    }
  });

  return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">HomePage</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/ordenes"} className="btn btn-primary mt-2">
          Ver ordenes
        </Link>
      </div>
    </div>
  );
}
