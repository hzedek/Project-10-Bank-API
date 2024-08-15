import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./pages/404";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
