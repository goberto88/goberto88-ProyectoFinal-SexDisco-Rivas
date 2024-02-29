import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Section from "../Section/Section";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../data/firebase";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoriaProductos } = useParams();

  useEffect(() => {
    const ref = collection(db, "product");
    const q = categoriaProductos
      ? query(ref, where("categoria", "==", categoriaProductos))
      : ref;
    getDocs(q).then((resp) => {
      setProduct(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [categoriaProductos]);

  return (
    <>
      <Section
        greeting={"Nuevo material disponible"}
        info={"Encuentra lo mejor de la música extrema"}
      />
      {product.length == 0 ? (
        <h1 className="text-center">CARGANDO...</h1>
      ) : (
        <ItemList products={product} />
      )}
    </>
  );
};

export default ItemListContainer;
