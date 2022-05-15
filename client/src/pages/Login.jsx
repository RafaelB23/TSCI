import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
// import * as Yup from "yup";

export function Login() {
  const navigate = useNavigate();
  var userState = false;

  useEffect(() => {
    if (userState) {
      navigate("/ordenes");
    }
  });

  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });

  return (
    <div className="d-flex align-items-center h-100">
      <div className="container col-4 text-center mx-auto">
        <h1 className="h3 mb-3">Iniciar sesión</h1>
        <Formik
          initialValues={login}
          onSubmit={(values, actions) => {
            setLogin(values);
            console.log(values);
            navigate("/ordenes");
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="form-signin"
              encType="multipart/form-data"
              method="post"
            >
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control mb-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">Correo Electronico</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control mb-3"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  required
                />
                <label htmlFor="floatingPassword">Contraseña</label>
                <div className="text-end">
                  <a href="/recoverypassword" className="link-primary">
                    Recuperar contraseña
                  </a>
                </div>
                <button type="submit" className="btn-lg btn-primary w-100 my-4">
                  Iniciar sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="m-0">
          ¿Aun no tienes cuenta?{" "}
          <a href="/signup" className="link-primary text-end m-0">
            Registrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}
