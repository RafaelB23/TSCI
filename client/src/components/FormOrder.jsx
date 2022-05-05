import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useOrders } from "../context/ordersContext.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function FormOrder() {
  const { createOrder, getOrder, updateOrder, deleteOrder } = useOrders();
  const navigate = useNavigate();
  const params = useParams();

  const [order, setOrder] = useState({
    owner: "",
    description: {
      specs: "",
      no_pieces: "",
    },
  });
  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getOrder(params.id);
        setOrder(res);
        const btn = document.getElementById("btn-delete");
        btn.style.display = "inline";
      }
    })();
  }, [params.id]);

  const handleDelete = () => {
    toast((t) => (
      <span>
        ¿Deseas <b>eliminar</b> esta orden?
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-danger me-3" onClick={() => {
            deleteOrder(params.id)
            toast.dismiss(t.id)
            toast.success('La orden a sido eliminada exitosamente')
            navigate("/")
            }}>
            Eliminar
          </button>
          <button className="btn btn-primary" onClick={() => toast.dismiss(t.id)}>
            Cancelar
          </button>
        </div>
      </span>
    ))
  }

  return (
    <div className="container-sm col-6">
      <Formik
        initialValues={order}
        validationSchema={Yup.object({
          owner: Yup.string().required("El nombre del cliente es requerido"),
          description: Yup.object().shape({
            specs: Yup.string().required(
              "Las especificaciones de la orden son requeridas"
            ),
            no_pieces: Yup.number().required(
              "El numero de piezas de la orden es requerido"
            ),
          }),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateOrder(params.id, values);
          } else {
            await createOrder(values);
          }
          toast.success('La orden se a guardado exitosamente')
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="container-sm border border-ligth mt-4 p-3"
          >
            <label htmlFor="owner" className="block fw-bold mb-2">
              Nombre del cliente
            </label>
            <Field
              className="form-control mb-3"
              name="owner"
              placeholder="Cliente"
            />
            <ErrorMessage
              component="p"
              className="text-danger fs-6"
              name="owner"
            />
            <label htmlFor="owner" className="block fw-bold mb-2">
              Decripción
            </label>
            <Field
              component="textarea"
              className="form-control mb-3"
              name="description.specs"
              placeholder="Especificaciones"
            />
            <ErrorMessage
              component="p"
              className="text-danger fs-6"
              name="description.specs"
            />
            <label htmlFor="owner" className="block fw-bold mb-2">
              Numero de piezas
            </label>
            <Field
              className="form-control mb-3"
              name="description.no_pieces"
              placeholder="Numero de piezas"
              type="number"
            />
            <ErrorMessage
              component="p"
              className="text-danger fs-6"
              name="description.no_pieces"
            />
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary col-3">
                Guardar
              </button>
              <button
                id="btn-delete"
                type="button"
                className="btn btn-danger col-3 ms-3"
                style={{ display: "none" }}
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
