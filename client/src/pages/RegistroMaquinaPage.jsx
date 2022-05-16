import React from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import { use } from "../context/";
    
export function NewMachine() {
    const navigate = useNavigate();
    /*const [drivers, setDriver] = useDrivers({
      name: {
        first_name: "",
        last_name: "",
      },
      phone_number: "",
      mail: "",
      password:"",
      employment:"",
      salary_hour:"",
      rfc:"",
      hiring_date:"",
      address:{
        street:"",
        cp:"",
        city:"",
        state:""
      }
    });*/
  
    return (
      <div>
        <div className="container col-4 mt-4 text-center">
          <h1 className="h3 mb-3">Registro de Maquina</h1>
          <Formik
            //initialValues={drivers}
            onSubmit={(values, actions) => {
              //setDriver(values);
              console.log(values);
              navigate("/maquinas");
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
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="Codigo"
                      required
                    />
                    <label htmlFor="floatingInput">Codigo</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="costo"
                      required
                    />
                    <label htmlFor="floatingInput">Costo Por Hora</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="Pago por hora"
                      required
                    />
                    <label htmlFor="floatingInput">Costo de Mano de Obra</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="120 minutos"
                      required
                    />
                    <label htmlFor="floatingInput">Tiempo estimado por pieza en minutos</label>
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
  