import React, { useEffect , useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { navDetector } from '../components/navConfiguration';
//import { use } from "../context/";
    
export function NewBill() {
    const navigate = useNavigate();
    useEffect(()=>{
      navDetector("facturas")
    })
    const [factura, setFactura] = useState({
      correo:"",
      rfc:"",
      cp:"",
      no:"",
      nt:"",
    
    });
  
    return (
      <div>
        <div className="container col-4 mt-4 text-center">
          <h1 className="h3 mb-3">Registro de Factura</h1>
          <Formik
            initialValues={factura}
            onSubmit={(values, actions) => {
              setFactura(values);
              console.log(values);
              navigate("/ordenes");
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
                      name="correo"
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
                      name="rfc"
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
                      name="cp"
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
                      name="no"
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
                      name="nt"
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
  