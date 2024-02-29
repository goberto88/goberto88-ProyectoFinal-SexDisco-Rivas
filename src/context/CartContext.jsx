import React, { useState, createContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInit);

  const addToCart = (product, count) => {
    const itemAdded = { product, count };

    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.product.id === product.id);
    if (itemInCart) {
      const newCount = itemInCart.count + count;
      if (newCount <= product.stock) {
        itemInCart.count = newCount;
      } else {
        toast.warning("No hay stock suficiente", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressClassName: "bg-red-500",
          className: "bg-gradient-to-b from-red-300 font-MiFuente text-black",
        });
        return;
      }
    } else {
      if (count > product.stock) {
        toast.warning("No hay stock suficiente", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressClassName: "bg-red-300",
          className: "bg-gradient-to-b from-red-300 font-MiFuente text-black",
        });

        return;
      }
      newCart.push(itemAdded);
    }

    setCart(newCart);
    toast.success("🛒 Producto agregado al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-gradient-to-b from-yellow-300 font-MiFuente text-black",
      progressClassName: "bg-red-500",
    });
  };

  const removeFromCart = (productId) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.product.id === productId);
    if (itemInCart) {
      itemInCart.count--;
      toast.warning("Producto eliminado", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-red-500",
        className: "bg-gradient-to-b from-red-300 font-MiFuente text-black",
      });
      if (itemInCart.count === 0) {
        newCart.splice(newCart.indexOf(itemInCart), 1);
      }
    }
    setCart(newCart);
    return newCart;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const qualityCart = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.count * item.product.precio,
      0
    );
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        qualityCart,
        totalPrice,
        removeFromCart,
        cleanCart,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

export default CartProvider;
