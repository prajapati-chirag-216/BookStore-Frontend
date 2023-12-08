import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Wrapper from "./components/UI/Wrapper";
import Layout from "./components/UI/Layout";
import Error from "./components/UI/Error";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ProductPage from "./pages/ProductPage";

import "./App.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />} errorElement={<Error />}>
      <Route index element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;