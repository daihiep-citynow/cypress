// libs
import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import { Home, FourOhFour } from "../pages";
// others
import configs from "../configs";

const publicRoutes = [
  { id: 1, path: configs.routes.home, component: Home },
  { id: 2, path: configs.routes.fourOhFour, component: FourOhFour }
];

const AppRoutes = () => (
  <Routes>
    {publicRoutes.map(({ id, path, component }) => {
      const Page = component;

      return <Route key={id} path={path} element={<Page />} />;
    })}
  </Routes>
);

export default AppRoutes;
