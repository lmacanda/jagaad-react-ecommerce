// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/UseAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductCard from "./components/productCard/ProductCard";
import AuthProvider from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [isAuthenticated] = useAuth();
  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/login"
              exact
              element={isAuthenticated ? <Dashboard /> : <Login />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductCard />} />{" "}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
