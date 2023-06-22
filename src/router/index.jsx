import React from "react";
import { Routes, Route } from "react-router-dom";
import { Button, Result } from "antd";
import { ROUTE } from "../constants/route";
import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

export default function AppRouter() {
  const routes = [
    { path: ROUTE.HOME, title: "Sigma DRM", element: Home, isPrivate: false },
    {
      path: "*",
      title: "Not Found",
      element: () => (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      ),
    },
  ];
  return (
    <Routes>
      {routes.map((route) => {
        const { isPrivate, element: Component } = route;
        const RouteWrapper = isPrivate ? PrivateRoute : PublicRoute;
        return (
          <Route
            key={route.path}
            {...route}
            element={
              <RouteWrapper title={route.title}>
                <Component />
              </RouteWrapper>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}
