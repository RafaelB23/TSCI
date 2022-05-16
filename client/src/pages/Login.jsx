import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useOrders } from "../context/ordersContext";
import toast from "react-hot-toast";

export function Login() {
  const navigate = useNavigate();
  var userState = false;

  const {
    authUser,
    setUser
  } = useOrders();

  useEffect(() => {
    if (userState) {
      navigate("/ordenes");
    }
  });

  const [login, setLogin] = useState({
    mail: "",
    password: ""
  });

  return (
    <div className="d-flex align-items-center h-100">
      <div className="container col-4 text-center mx-auto">
        <h1 className="h3 mb-3">Iniciar sesión</h1>
        <Formik
          initialValues={login}
          onSubmit={ async (values, actions) => {
            setLogin(values);
            toast.loading("Cargando...")
            const res = await authUser(values)
            toast.dismiss()

            if(res.data.mail) {
              await setUser(res.data)
              toast.success(`Bienvenido ${res.data.name}`)
              navigate("/ordenes");
            }else{
              toast.error(res.data.message)
            }
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
                  type="email"
                  className="form-control mb-3"
                  id="mail"
                  name= "mail"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="mail">Correo Electronico</label>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control mb-3"
                  id="password"
                  name= "password"
                  placeholder="Contraseña"
                  required
                />
                <label htmlFor="password">Contraseña</label>
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
