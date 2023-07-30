import React from "react";
import logo from "../assets/DailyPlanet-logo.png";

const Titulo = () => {
  return (
    <section className="text-center pt-4">
      <img src={logo} alt="Logo-DailyPlanet" className="w-100" />
      <h4 className="display-6">Verdad, Noticias y Confianza</h4>
    </section>
  );
};

export default Titulo;
