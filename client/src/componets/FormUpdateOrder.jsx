import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useOrders } from "../context/ordersContext.js";
import { useNavigate } from "react-router-dom";

export function FormUpdateOrder(data) {
    console.log(data)
    const { updateOrder } = useOrders();
    const navigate = useNavigate();
    return (
      <div>
        <Formik
          initialValues={{
            owner: "",
            description: {
              specs: "",
              no_pieces: "",
            },
          }}
          validationSchema={Yup.object({
            owner: Yup.string().required("No modificaste este campo, da un espacio para continuar"),
            description: Yup.object().shape({
              specs: Yup.string().required(
                "No modificaste este campo, da un espacio para continuar"
              ),
              no_pieces: Yup.number().required(
                "No modificaste este campo, da un espacio para continuar"
              ),
            }),
          })}
          onSubmit={async (values, actions) => {
            await updateOrder(values);
            navigate("/");
          }}
        >
          {({ handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="container-sm border border-ligth mt-4 p-3"
            >
              <Field
                className="form-control mb-3"
                name="owner"
                placeholder="Cliente"
              />
              <ErrorMessage
                component="p"
                className="text-warning fs-6"
                name="owner"
              />
              <Field
                className="form-control mb-3"
                name="description.specs"
                placeholder="Especificaciones"
              />
              <ErrorMessage
                component="p"
                className="text-warning fs-6"
                name="description.specs"
              />
              <Field
                className="form-control mb-3"
                name="description.no_pieces"
                placeholder="Numero de piezas"
              />
              <ErrorMessage
                component="p"
                className="text-warning fs-6"
                name="description.no_pieces"
              />
              <button type="submit" className="btn btn-primary input-group">
                Guardar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
}
