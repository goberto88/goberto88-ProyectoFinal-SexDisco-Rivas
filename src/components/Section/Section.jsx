import React from "react";
import { Link } from "react-router-dom";

const Section = ({ greeting, info }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center p-10">
        <div className="secc-text md:w-1/2 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-MiFuente">{greeting}</h1>
          <p className="text-base font-MiFuente md:text-lg mt-3 mb-3 md:mt-5">
            {info}
          </p>
          <Link to={"/"}>
            <button className="flex justify-center items-center mx-auto gap-2 w-60 py-3 px-4 bg-red-700 text-white text-md font-MiFuente border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
              Ver todos los productos
            </button>
          </Link>
        </div>
        <img
          className="imagen-seccion w-full md:w-3/5 mt-5 md:mt-0"
          src="/LogoSexDiscos/seccImg-PhotoRoom.png-PhotoRoom.png"
          alt="imagen-seccion"
        />
      </section>
    </>
  );
};

export default Section;
