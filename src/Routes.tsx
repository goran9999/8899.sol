import React from "react";
import { Route, Routes as DomRoutes } from "react-router";
import { PROGRAMS } from "./common/url.constants";
import HomePage from "./pages/HomePage";
import Programs from "./pages/Programs";
const Routes = () => {
  return (
    <DomRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path={PROGRAMS} element={<Programs />} />
    </DomRoutes>
  );
};

export default Routes;
