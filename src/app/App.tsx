import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "@/assets/scss/global.scss";
import { lazy } from "react";
import { Provider } from "react-redux";
import { store } from "@/services/store/store";

const ProductsCatalog = lazy(
  () => import("@/pages/ProductsCatalog/ProductsCatalog"),
);
const ProductPage = lazy(() => import("@/pages/ProductPage/ProductPage"));
const FormPage = lazy(() => import("@/pages/FormPage/FormPage"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/EcosystemAlpha-test">
        <Routes>
          <Route path="products" element={<ProductsCatalog />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="create-product" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
