import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product";
import Shop from './pages/Shop';
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category:catSection" element={<ShopCategory />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
