import React from "react";
import Swal from "sweetalert2";

const Alert = ({ orderNumber }) => {
  Swal.fire({
    icon: "success",
    title: `Su compra fue exitosa.
    Su numero de orden es: ${orderNumber}`,
    showConfirmButton: false,
    timer: 4000,
  });

  return null;
};

export default Alert;
