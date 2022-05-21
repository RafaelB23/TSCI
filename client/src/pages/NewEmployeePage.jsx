import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDrivers } from "../context/driversContext";
import { toast } from "react-hot-toast";

export function NewEmployee() {
  const navigate = useNavigate();
  const { createDriver } = useDrivers();
  const [driver, setDriver] = useState({
    name: {
      first_name: "",
      last_name: "",
    },
    phone_number: "",
    mail: "",
    password: "",
    rol:"",
    employment: "",
    salary_hour: "",
    rfc: "",
    hiring_date: "",
    address: {
      street: "",
      cp: "",
      city: "",
      state: "",
    },
  });
    
  return (
    <div>
      <div className="container mt-4 text-center">
        <h1 className="h3 mb-3">Registro de Operador</h1>
        <Formik
          initialValues={driver}
          onSubmit={async (values, actions) => {
            toast.loading("Cargando...");
            const res = await createDriver(values);
            toast.dismiss();
            if (typeof res.data === "string") {
              toast.error(res.data);
            } else {
              await setDriver(values);
              toast.success("El operador se a registro exitosamente");
              navigate("/operadores");
            }
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="form-signin col-lg-5 m-auto"
              encType="multipart/form-data"
              method="post"
            >
              <div className="form-floating">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingName"
                  name="name.first_name"
                  placeholder="Nombre"
                  required
                />
                <label htmlFor="floatingName">Nombre(s)</label>
              </div>

              <div className="form-floating">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingName"
                  name="name.last_name"
                  placeholder="Apellido"
                  required
                />
                <label htmlFor="floatingName">Apellido(s)</label>
              </div>

              <div className="form-floating">
                <Field
                  type="tel"
                  className="form-control mb-3"
                  id="floatingNumber"
                  name="phone_number"
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
                <Field as="select" name="rol" className="form-select mb-3" required>
                  <option value="Empleado">Empleado</option>
                  <option value="Admin">Administrador</option>
                </Field>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="password"
                  placeholder="Contrasena"
                  required
                />
                <label htmlFor="floatingInput">Contrasena</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="employment"
                  placeholder="Puesto"
                  required
                />
                <label htmlFor="floatingInput">Puesto</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="number"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="salary_hour"
                  placeholder="PagoxHora"
                  required
                />
                <label htmlFor="floatingInput">Salario por hora</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="rfc"
                  placeholder="VECJ880326 XXX"
                  required
                />
                <label htmlFor="floatingInput">RFC</label>
              </div>

              <div className="form-floating w-30">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="address.street"
                  placeholder="Direccion particular"
                  required
                />
                <label htmlFor="floatingInput">Direccicon</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="number"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="address.cp"
                  placeholder="66000"
                  required
                />
                <label htmlFor="floatingInput">Codigo Postal</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="address.city"
                  placeholder="Ciudad"
                  required
                />
                <label htmlFor="floatingInput">Ciudad</label>
              </div>
              <div className="form-floating w-30">
                <Field
                  type="text"
                  className="form-control mb-3"
                  id="floatingInput"
                  name="address.state"
                  placeholder="Estado"
                  required
                />
                <label htmlFor="floatingInput">Estado</label>
              </div>
              <button type="submit" className="btn-lg btn-primary w-100 my-4">
                Registar Operador
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
