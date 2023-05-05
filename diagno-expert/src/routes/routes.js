import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../pages/home";
import AuthPage from "../pages/auth";
import ErrorPage from "../pages/error";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="*"
          element={<ErrorPage message="It has ocurred an issue." />}
        />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
