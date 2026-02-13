import { useEffect, useState } from "react";
import style from "./CardList.module.scss";
import type { TypeProduct } from "@/types/products.type";
import axios from "axios";
import { Card } from "../Card/Card";

export const CardList = () => {
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<TypeProduct[]>([]);
  const [filter, setFilter] = useState("all");

  const handleOnDelete = (product: TypeProduct) => {
    if (filter === "all") {
      const exist = products.filter((item) => item.id !== product.id);
      setProducts(exist);
    } else {
      const exist = favoriteProducts.filter((item) => item.id !== product.id);
      setFavoriteProducts(exist);
    }
  };

  const handleOnFavorite = (product: TypeProduct) => {
    if (!favoriteProducts.includes(product)) {
      setFavoriteProducts((prevState) => [...prevState, product]);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.filters}>
        <label htmlFor="filter">Показывать:</label>
        <select
          name="filter"
          id="filter"
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">Все</option>
          <option value="favorite">Избранное</option>
        </select>
      </div>
      {filter === "all" ? (
        <div className={style.list}>
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleOnDelete={handleOnDelete}
              handleOnFavorite={handleOnFavorite}
            />
          ))}
        </div>
      ) : (
        <div className={style.list}>
          {favoriteProducts &&
            favoriteProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleOnDelete={handleOnDelete}
                handleOnFavorite={handleOnFavorite}
              />
            ))}
        </div>
      )}
    </div>
  );
};
