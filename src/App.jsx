import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <BrowserRouter>
          <div className="flex-grow bg-zinc-100">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/categoria/:categoriaProductos"
                element={<ItemListContainer />}
              />
              <Route path="/detalles/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
