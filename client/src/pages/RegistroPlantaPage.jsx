import React from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
//import { use } from "../context/";
    
export function NewSite() {
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
          <h1 className="h3 mb-3">Registro de Operador</h1>
          <Formik
            //initialValues={drivers}
            onSubmit={(values, actions) => {
              //setDriver(values);
              console.log(values);
              navigate("/plantas");
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
  