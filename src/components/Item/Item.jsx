import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/detalles/${product.id}`}>
      <div className="group relative rounded-lg bg-white p-6 shadow-md ">
        <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.imagen}
            alt={product.descripcion}
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-MiFuente text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.banda}
            </h3>
            <p className="mt-1 font-MiFuente text-sm text-gray-500">
              {product.descripcion}
            </p>
          </div>
          <p className="text-sm  font-MiFuente text-red-700">
            {"$" + product.precio}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
