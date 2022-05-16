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
    address: {
      street: "",
      streetNum: "",
      cp: "",
      city: "",
      state: "",
    },
    profile_img: "",
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
                    className="form-control mb-0"
                    id="floatinglastM"
                    name="lastname.paternal"
                    placeholder="Apellido materno"
                  />
                  <label htmlFor="floatinglastM">Apellido materno</label>
                </div>
                <div className="form-floating w-50">
                  <Field
                    type="text"
                    className="form-control mb-0"
                    id="floatinglastP"
                    name="lastname.maternal"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatinglastP">Apellido paterno</label>
                </div>
                <div className="form-text text-start mb-3">Si estas te estas registrando como empresa, omite los campos de apellidos*</div>
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
              <div className="form-floating border-bottom mb-3">
                <p className="form-text fs-4 m-2 text-start">Dirección</p>
              </div>
              <div className="input-group w-100">
                <div className="form-floating w-75">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatingStreet"
                    name="address.street"
                    placeholder="Calle"
                    required
                  />
                  <label htmlFor="floatingStreet">Calle</label>
                </div>
                <div className="form-floating w-25">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatingStreetNum"
                    name="address.streetNum"
                    placeholder="N°"
                    required
                  />
                  <label htmlFor="floatingStreet">N°</label>
                </div>
              </div>
              <div className="form-floating">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatingCP"
                    name="address.cp"
                    placeholder="CP"
                    required
                  />
                  <label htmlFor="floatingCP">CP</label>
                </div>
                <div className="form-floating">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatingCity"
                    name="address.city"
                    placeholder="Ciudad"
                    required
                  />
                  <label htmlFor="floatingCity">Ciudad</label>
                </div>
                <div className="form-floating">
                  <Field
                    type="text"
                    className="form-control mb-3"
                    id="floatingState"
                    name="address.state"
                    placeholder="Estado"
                    required
                  />
                  <label htmlFor="floatingState">Estado</label>
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
