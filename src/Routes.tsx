import React from "react";
import { Route, Routes as DomRoutes } from "react-router";
import HomePage from "./pages/HomePage";
const Routes = () => {
  return (
    <DomRoutes>
      <Route path="/" element={<HomePage />} />
    </DomRoutes>
  );
};

export default Routes;
