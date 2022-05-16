import React from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import { use } from "../context/";
    
export function NewPiece(){

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
                  navigate("/inventario");
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
                          placeholder="Numero de Articulo"
                          required
                        />
                        <label htmlFor="floatingInput">Numero de Articulo</label>
                    </div>
                    <div className="form-floating w-30">
                        <Field
                          type="number"
                          className="form-control mb-3"
                          id="floatingInput"
                          name=""
                          placeholder="Cantidad de Articulos"
                          required
                        />
                        <label htmlFor="floatingInput">Cantidad</label>
                    </div>
                    <div className="form-floating w-30">
                        <Field
                          type="number"
                          className="form-control mb-3"
                          id="floatingInput"
                          name=""
                          placeholder="CP"
                          required
                        />
                        <label htmlFor="floatingInput">Codigo Postal</label>
                    </div>
                    <div className="form-floating w-30">
                        <Field
                          type="text"
                          className="form-control mb-3"
                          id="floatingInput"
                          name=""
                          placeholder="Notas adicionales"
                        />
                        <label htmlFor="floatingInput">Nota</label>
                    </div>
                    <div className="form-floating w-30">
                        <Field
                          type="text"
                          className="form-control mb-3"
                          id="floatingInput"
                          name=""
                          placeholder="Donde se ubica"
                          required
                        />
                        <label htmlFor="floatingInput">Planta</label>
                    </div>
                    <button type="submit" className="btn-lg btn-primary w-100 my-4">
                      Registar Articulo
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        );
      }
      