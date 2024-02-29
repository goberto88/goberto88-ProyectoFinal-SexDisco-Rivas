import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../data/firebase";
import Alert from "../alert/Alert";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const [orderNumber, setOrderNumber] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orders = (data) => {
    const order = {
      cliente: data,
      fecha: new Date(),
      productos: cart,
      total: totalPrice(),
    };

    Promise.all(
      cart.map(async (item) => {
        const productRef = doc(db, "product", item.product.id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const newStock = productDoc.data().stock - item.count;
          await updateDoc(productRef, { stock: newStock });
        } else {
          console.error(
            "El documento del producto no existe:",
            item.product.id
          );
        }
      })
    );

    const ref = collection(db, "order");

    addDoc(ref, order)
      .then((doc) => {
        cleanCart();
        setOrderNumber(doc.id);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error al añadir orden ", error);
      });
  };

  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-MiFuente">Resumen del pedido</p>

          <p className="text-gray-400">Revisa tus artículos.</p>

          {cart.map((item) => (
            <div
              className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
              key={item.product.id}
            >
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.product.imagen}
                  alt={item.product.descripcion}
                />

                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-MiFuente">{item.product.banda}</span>
                  <span className="float-right text-gray-400">
                    {item.product.descripcion}
                  </span>
                  <p className="font-MiFuente">${item.product.precio}</p>
                  <p className="font-MiFuente">x{item.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          className=" mb-10 bg-white  px-4 pt-8 lg:mt-0"
          onSubmit={handleSubmit(orders)}
        >
          <p className="text-xl font-MiFuente">Detalles del pago</p>

          <p className="text-gray-400">
            Complete su pedido proporcionando sus datos de pago.
          </p>

          <label
            htmlFor="nombre"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Nombre
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Nombre"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <p className="text-red-300 text-xs">Este campo es obligatorio.</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>

          <label
            htmlFor="apellido"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Apellidos
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Apellido"
              {...register("apellido", { required: true })}
            />
            {errors.apellido && (
              <p className="text-red-300 text-xs">Este campo es obligatorio.</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>

          <label
            htmlFor="rut"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Rut
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ingresa tu RUT:  22.222.222-2"
              {...register("rut", { required: true, pattern: /^[0-9]*$/ })}
            />
            {errors.rut && (
              <p className="text-red-300 text-xs">Este campo debe ser numérico.</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>

          <label
            htmlFor="telefono"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Teléfono
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Número de teléfono"
              {...register("telefono", { required: true, pattern: /^[0-9]*$/ })}
            />
            {errors.telefono && (
              <p className="text-red-300 text-xs">Este campo debe ser numérico.</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>

          <label
            htmlFor="email"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="xxxxxxxxx@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-300 text-xs">Este campo es obligatorio.</p>
            )}

            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>

          <label
            htmlFor="direccion"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Dirección
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ingresa tu dirección"
              {...register("direccion", { required: true })}
            />
            {errors.direccion && (
              <p className="text-red-300 text-xs">Este campo es obligatorio.</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </div>
          </div>

          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Nombre y Apellido como figura en la tarjeta
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-xs  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Nombre de la tarjeta"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>

          <label
            htmlFor="card-no"
            className="mt-4 mb-2 block text-sm font-MiFuente"
          >
            Detalle de la tarjeta de pago
          </label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-xs shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              className="w-full rounded-md border border-gray-200 px-2 py-3 text-xs text-center shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/AA"
            />
            <input
              className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-xs text-center shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC"
            />
          </div>

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-MiFuente text-gray-900">Subtotal</p>
              <p className="font-MiFuente text-gray-900">${totalPrice()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-MiFuente text-gray-900">Shipping</p>
              <p className="font-MiFuente text-gray-900">$2000</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-MiFuente text-gray-900">Total</p>
            <p className="text-2xl font-MiFuente text-gray-900">
              ${totalPrice() + 2000}
            </p>
          </div>

          <div className="flex justify-center mt-10 mb-10">
            <button
              type="submit"
              className="w-72 rounded-md bg-red-700 py-2 font-MiFuente text-white text-md font-MiFuente border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
            >
              Finalizar compra
            </button>
          </div>
        </form>
      </div>
      {showAlert && <Alert orderNumber={orderNumber} />}
    </>
  );
};

export default Checkout;
