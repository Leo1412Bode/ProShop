import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/product/:id" component={ProductPage} exact></Route>
          <Route path="/login" component={LoginPage} exact></Route>
          <Route path="/cart" component={CartPage} exact></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
