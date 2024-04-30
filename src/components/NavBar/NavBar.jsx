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
            src="/LogoSexDiscos/sexDiscoLogo.png"
            alt="logo"
            className="w-32 sm:w-48 md:w-52 lg:w-56"
          />
        </NavLink>

        <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 ${isOpen ? "hidden" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 ${isOpen ? "" : "hidden"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
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
              onClick={toggleMenu}
              to={"categoria/vinilos"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black mr-5 text-xl"
            >
              Vinilos
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              to={"categoria/cds"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black mr-5 text-xl"
            >
              CDs
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              to={"categoria/cassettes"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black mr-5 text-xl"
            >
              Cassettes
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              to={"categoria/camisetas"}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-0 text-black-700  active:scale-110 active:font-black mr-5 text-xl"
            >
              Camisetas
            </NavLink>

            <NavLink onClick={toggleMenu} to={"/cart"}>
              <CartWidget />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
