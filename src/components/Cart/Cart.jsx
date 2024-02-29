import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-full bg-gray-0 pt-20">
      <h1 className="mb-10 text-center text-2xl font-MiFuente">Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">
          No hay artículos en el carrito.{" "}
        </p>
      ) : (
        <div className="mx-auto font-MiFuente max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <Link to={`/detalles/${item.product.id}`}>
                  <img
                    src={item.product.imagen}
                    alt={item.product.descripcion}
                    className="w-full rounded-lg sm:w-40"
                  />
                </Link>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-MiFuente text-gray-900">
                      {item.product.descripcion}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {item.product.banda}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center justify-center border-gray-100">
                      <div className="h-8 w-8 border bg-white flex justify-center items-center text-center text-xs outline-none">
                        {item.count}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-MiFuente">
                        ${item.product.precio}
                      </p>
                      <button
                        className="ml-4 text-red-700 hover:translate-y-1 hover:scale-110"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 font-MiFuente">Subtotal</p>
              <p className="text-gray-700">$ {totalPrice()}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-MiFuente">Total a pagar:</p>
              <div className="">
                <p className="mb-1 text-lg font-MiFuente">${totalPrice()}</p>
              </div>
            </div>
            <Link to={"/checkout"}>
              <button className="mt-5 w-full rounded-md bg-red-700 py-1.5 font-medium text-white text-md font-MiFuente border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                Confirmar
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
