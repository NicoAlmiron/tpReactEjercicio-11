import React from "react";
import { Form, FormGroup, FormSelect } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticia = () => {
  return (
    <section className="border border-2 border-danger rounded-3 shadow">
      <article className="p-5 border border-bottom bg-danger rounded-3">
        <Form>
          <FormGroup className="d-flex justify-content-between align-items-between">
            <h5 className="fw-light text-white">Buscar por categoria: </h5>
            <FormSelect>
              <option>Categorias</option>
            </FormSelect>
          </FormGroup>
        </Form>
      </article>
      <ListaNoticias></ListaNoticias>
    </section>
  );
};

export default FormularioNoticia;
