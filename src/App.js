import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./components/Context/AuthContext";
import { ProductProvider } from "./components/Context/ProductContext";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;