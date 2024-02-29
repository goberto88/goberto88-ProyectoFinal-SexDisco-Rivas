import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../../data/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const detailDoc = doc(db, "product", id);

    getDoc(detailDoc).then((resp) => {
      setProduct({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <>{product && <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
