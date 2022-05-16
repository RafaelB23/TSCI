import React from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import { use } from "../context/";
    
export function NewBill() {
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

                <div className="form-floating w-30">
                    <Field
                      type="email"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="foo@example.com"
                      required
                    />
                    <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="text"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="RFC"
                      required
                    />
                    <label htmlFor="floatingInput">RFC Receptor</label>
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
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="Id de orden"
                      required
                    />
                    <label htmlFor="floatingInput">Numero de Orden</label>
                </div>
                <div className="form-floating w-30">
                    <Field
                      type="number"
                      className="form-control mb-3"
                      id="floatingInput"
                      name=""
                      placeholder="#TRANSACCION"
                      required
                    />
                    <label htmlFor="floatingInput">Numero de Transaccion</label>
                </div>
                <button type="submit" className="btn-lg btn-primary w-100 my-4">
                  Registar Factura
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
  