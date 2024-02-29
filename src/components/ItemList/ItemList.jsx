import { React } from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="bg-zinc-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-3xl font-MiFuente tracking-tight text-gray-900">
            Todos nuestros productos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer">
            {products.map((product) => {
              return <Item key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
