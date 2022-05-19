import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSucursales } from '../context/sucursalContext';
import toast from 'react-hot-toast';
//import { use } from "../context/";
    
export function NewSite() {
    const navigate = useNavigate();
    const { createSucursal } = useSucursales()
    const [site, setSite] = useState({
      name: "",
      address: {
        street: "",
        cp: "",
        city: "",
        state: ""
      },
      phone_number: ""
    });
  
    return (
      <div>
        <div className="container-sm col-lg-4 mt-4 text-center">
          <h1 className="h3 mb-3">Registro de sucursal</h1>
          <Formik
            initialValues={site}
            onSubmit={async (values, actions) => {
              console.log(values);
              toast.loading("Cargando...")
              const res = await createSucursal(values)
              toast.dismiss()
              if(typeof res.data === "string"){
                toast.error(res.data)
              }else{
                setSite(values)
                toast.success("La sucursal se registro exitosamente")
                navigate("/plantas");
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

                <div className="form-floating w-30">
                    <Field
                      type="text"
                      className="form-control mb-3"
                      id="floatingInput"
                      name="name"
                      placeholder="Identificador"
                      required
                    />
                    <label htmlFor="floatingInput">Nombre de la sucursal</label>
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
                      placeholder="00000"
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
                      placeholder="VECJ880326 XXX"
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
                      placeholder="VECJ880326 XXX"
                      required
                    />
                    <label htmlFor="floatingInput">Estado</label>
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
                <button type="submit" className="btn-lg btn-primary w-100 my-4">
                  Registar Planta
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
  