import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Componants/Footer";
import Error404 from "./Pages/404";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import UserProfile from "./Pages/UserProfile";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
