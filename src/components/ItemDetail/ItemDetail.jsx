import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const esCamiseta = product.categoria === "camisetas";

  return (
    <div className="max-w-3xl mx-auto rounded-lg bg-white p-6 shadow-md  mt-10 mb-10 ">
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-5 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={product.imagen}
            alt={product.descripcion}
            className="w-full md:max-w-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl text-red-700 font-MiFuente mb-2">
              {product.banda}
            </h1>
            <p className="text-base font-MiFuente md:text-lg text-black-600 leading-6 mb-4">
              {product.descripcion}
            </p>
            <p className="text-lg font-MiFuente md:text-xl text-black-600 mb-4">
              Precio: ${product.precio}
            </p>
            {esCamiseta && (
              <div className="mt-2">
                <p className="text-black-600 font-MiFuente text-base">
                  Tamaño:
                </p>
                <div className="flex mt-1">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="text-sm md:text-base text-red-700 border border-gray-300 rounded-md px-2 py-1 mr-1 hover:bg-gray-200 font-MiFuente"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <ItemCount initial={1} stock={product.stock} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
