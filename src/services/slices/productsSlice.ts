import type { TypeProduct } from "@/types/products.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  allProducts: TypeProduct[];
  favoriteIds: string[];
};

const initialState: InitialState = {
  allProducts: [],
  favoriteIds: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts: (state, action: PayloadAction<TypeProduct[]>) => {
      state.allProducts = action.payload;
    },
    removeProduct: (
      state,
      action: PayloadAction<{
        filter: string;
        product: TypeProduct;
      }>,
    ) => {
      if (action.payload.filter === "all") {
        state.allProducts = state.allProducts.filter(
          (item) => item.id !== action.payload.product.id,
        );
      }
      if (action.payload.filter === "favorite") {
        state.favoriteIds = state.favoriteIds.filter(
          (item) => item !== action.payload.product.id,
        );
      }
    },
    setFavoriteProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.favoriteIds.push(action.payload.id);
    },
    addedProduct: (state, action: PayloadAction<TypeProduct>) => {
      state.allProducts.push(action.payload);
    },
  },
});

export const { initProducts, removeProduct, setFavoriteProduct, addedProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
