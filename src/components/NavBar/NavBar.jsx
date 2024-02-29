import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-b from-zinc-400 p-10">
        <NavLink to={"/"}>
          <img
            src="../public/LogoSexDiscos/sexDiscoLogo.png"
            alt="logo"
            className="w-48 sm:w-48 md:w-64 lg:w-64 xl:w-96"
          />
        </NavLink>

        <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div
          className={`w-full ${
            isOpen ? "" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-base items-center lg:flex-grow">
            <NavLink
              to={"categoria/vinilos"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black m-4 text-xl"
            >
              Vinilos
            </NavLink>

            <NavLink
              to={"categoria/cds"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black m-4 text-xl"
            >
              CDs
            </NavLink>

            <NavLink
              to={"categoria/cassettes"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black m-4 text-xl"
            >
              Cassettes
            </NavLink>

            <NavLink
              to={"categoria/camisetas"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black m-4 text-xl"
            >
              Camisetas
            </NavLink>

            <NavLink to={"/cart"}>
            <CartWidget />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
