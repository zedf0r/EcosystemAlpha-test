import { BrowserRouter, Route, Routes } from "react-router";
import "@/assets/scss/global.scss";
import { lazy } from "react";

const Products = lazy(() => import("@/pages/Products/Products"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
