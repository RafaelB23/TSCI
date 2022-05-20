import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useMachines } from '../context/machinesContext';
import { toast } from "react-hot-toast";
//import { use } from "../context/";
    
export function NewMachine() {
    const navigate = useNavigate();
    const { createMachine } = useMachines()
    const [machine, setMachine] = useState({
      noMachine:"",
      costHour:"",
      area:""
    });
  
    return (
      <div>
        <div className="container mt-4 text-center">
          <h1 className="h3 mb-3">Registro de Maquina</h1>
          <Formik
            initialValues={machine}
            onSubmit={async (values, actions) => {

              toast.loading("Cargando...");
              const res = await createMachine(values);
              toast.dismiss();
              if (typeof res.data === "string") {
                toast.error(res.data);
              } else {
                await setMachine(values);
                toast.success("La maquina se a registro exitosamente");
                navigate("/maquinas");
              }
            }}
            enableReinitialize
          >
            {({ handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="form-signin col-lg-4 m-auto"
                encType="multipart/form-data"
                method="post"
              >

                <div className="form-floating w-30">
                    <Field
                      type="text"
                      className="form-control mb-3"
                      id="floatingInput"
                      name="noMachine"
                      placeholder="Codigo"
                      required
                    />
                    <label htmlFor="floatingInput">Codigo de la maquina</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name="costHour"
                      placeholder="costo"
                      required
                    />
                    <label htmlFor="floatingInput">Costo Por Hora</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="text"
                      className="form-control mb-3"
                      id="floatingInput"
                      name="area"
                      placeholder="120 minutos"
                      required
                    />
                    <label htmlFor="floatingInput">Area</label>
                </div>
                <button type="submit" className="btn-lg btn-primary w-100 my-4">
                  Registar Maquina
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
  