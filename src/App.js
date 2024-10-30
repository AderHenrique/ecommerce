import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategoty from "./Pages/ShopCategoty";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategoty category="mens" />} />
        <Route path="/womens" element={<ShopCategoty category="womens" />} />
        <Route path="/kids" element={<ShopCategoty category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":product:Id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
