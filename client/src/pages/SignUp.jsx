import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

export function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    lastname: {
      paternal: "",
      maternal: "",
    },
    phone: "",
    mail: "",
    password: "",
    cpassword: "",
  });

  return (
    <div>
      <div className="container col-4 mt-4 text-center">
        <h1 className="h3 mb-3">Registrate</h1>
        <Formik
          initialValues={user}
          onSubmit={(values, actions) => {
            setUser(values);
            console.log(values);
            navigate("/");
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
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingName"
                  name="name"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingName">Nombre(s)</label>
              </div>
              <div className="input-group w-100">
                <div className="form-floating w-50">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatinglastM"
                    name="lastname.paternal"
                    placeholder="Apellido materno"
                    required
                  />
                  <label htmlFor="floatinglastM">Apellido materno</label>
                </div>
                <div className="form-floating w-50">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatinglastP"
                    name="lastname.maternal"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="floatinglastP">Apellido paterno</label>
                </div>
              </div>
              <div className="form-floating">
                <Field
                  type="tel"
                  className="form-control mb-3"
                  id="floatingNumber"
                  name="phone"
                  placeholder="81 8000 0000"
                  required
                />
                <label htmlFor="floatingNumber">Telefono</label>
              </div>
              <div className="form-floating">
                <Field
                  type="email"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="mail"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">Correo Electronico</label>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control mb-3"
                  id="floatingPassword"
                  name="password"
                  placeholder="Contraseña"
                  required
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control mb-3"
                  id="floatingCPassword"
                  name="cpassword"
                  placeholder="Confirmar contraseña"
                  required
                />
                <label htmlFor="floatingCPassword">Confirmar contraseña</label>
              </div>
              <button type="submit" className="btn-lg btn-primary w-100 my-4">
                Registrate
              </button>
            </Form>
          )}
        </Formik>
        <p className="m-0">
          Si ya tienes cuenta{" "}
          <a href="/" className="link-primary text-end m-0">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
}
