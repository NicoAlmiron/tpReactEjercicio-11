import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormSelect } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticia = () => {
  // const [noticia, setNoticia] = useState({});
  const [listaNoticias, setListaNoticia] = useState([]);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    consultarApi();
  }, [category]);

  const consultarApi = async () => {
    try {
      const categorias =
        "https://newsdata.io/api/1/news?apikey=pub_26951a1e34a6e654eea667e0cbda989db6e59&language=es";
      const linkCategorias = categorias + "&category=" + category;
      const respuesta = await fetch(linkCategorias);

      const noticias = await respuesta.json();
      // setNoticia(noticias.results[0]);
      setListaNoticia([...listaNoticias, noticias.results[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="border border-2 border-danger rounded-3 shadow">
      <article className="p-5 border border-bottom bg-danger rounded-3">
        <Form>
          <FormGroup className="d-flex justify-content-between align-items-between">
            <h5 className="fw-light text-white">Buscar por categoria: </h5>
            <FormSelect
              placeholder="Categorias"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="environment">Medio Ambiente</option>
              <option value="food">Comida</option>
              <option value="health">Salud</option>
              <option value="politics">Politica</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnologia</option>
              <option value="top">Top</option>
              <option value="tourism">Turismo</option>
              <option value="world">Actualidad</option>
            </FormSelect>
          </FormGroup>
        </Form>
      </article>
      <ListaNoticias listaNoticias={listaNoticias}></ListaNoticias>
    </section>
  );
};

export default FormularioNoticia;
