import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ initial, stock, product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    count < stock && setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 1 && setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, count);
  };

  return (
    <>
      <div>
        <div className="text-left flex flex-col gap-2 w-full">
          <label className="font-MiFuente">Stock en tienda: {stock}</label>
          <div className="flex border border-gray-300 rounded-md w-max">
            <button className="px-3 py-1 bg-gray-200" onClick={handleDecrement}>
              -
            </button>
            <input
              className="border-none text-sm font-MiFuente mb-1 max-w-full w-12 outline-none py-2 px-2 md:py-2 md:px-2 md:mb-0 focus:border-red-500 text-center"
              type="number"
              value={count}
              readOnly
            />
            <button className="px-3 py-1 bg-gray-200" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>

        <div className="w-full text-left my-4">
          <button
            onClick={handleAddToCart}
            className="flex justify-center items-center gap-2 w-60 py-3 px-4 bg-red-700 text-white text-md font-MiFuente border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
          >
            <span>Añadir al Carrito</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
