import {
  initProducts,
  removeProduct,
  setFavoriteProduct,
} from "@/services/slices/productsSlice";
import type { RootState } from "@/services/store/store";
import type { TypeProduct } from "@/types/products.type";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publicApi } from "../config";

export const useProducts = () => {
  const [filter, setFilter] = useState<"all" | "favorite">("all");
  const { allProducts, favoriteIds } = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (allProducts.length === 0) {
      publicApi.get("/products.json").then((response) => {
        dispatch(initProducts(response.data));
      });
    }
  }, [dispatch]);

  const handleOnDelete = (product: TypeProduct) => {
    dispatch(removeProduct({ filter, product }));
  };

  const handleOnFavorite = (product: TypeProduct) => {
    if (!favoriteIds.includes(product.id)) {
      dispatch(setFavoriteProduct({ id: product.id }));
    }
  };

  const favoriteProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  const productsToRender = filter === "all" ? allProducts : favoriteProducts;
  const favoriteSet = new Set(favoriteIds);

  return {
    setFilter,
    handleOnDelete,
    handleOnFavorite,
    productsToRender,
    favoriteSet,
  };
};
