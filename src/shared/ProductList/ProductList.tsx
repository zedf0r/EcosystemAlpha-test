import style from "./ProductList.module.scss";
import { Card } from "../Card/Card";
import { useProducts } from "../hooks/useProducts";
import { Button } from "..";
import { useNavigate } from "react-router";

type TypeFilter = "all" | "favorite";

export const ProductList = () => {
  const {
    setFilter,
    handleOnDelete,
    handleOnFavorite,
    productsToRender,
    favoriteSet,
  } = useProducts();
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <div className={style.filters}>
        <label htmlFor="filter">Показывать:</label>
        <select
          name="filter"
          id="filter"
          onChange={(event) => {
            const value = event.target.value as TypeFilter;
            setFilter(value);
          }}
        >
          <option value="all">Все</option>
          <option value="favorite">Избранное</option>
        </select>
        <div className={style.button}>
          <Button type="button" onClick={() => navigate("/create-product")}>
            Создать карточку
          </Button>
        </div>
      </div>

      <div className={style.list}>
        {productsToRender.map((product) => {
          const isFavorite = favoriteSet.has(product.id);
          return (
            <Card
              key={product.id}
              product={product}
              handleOnDelete={handleOnDelete}
              isFavorite={isFavorite}
              handleOnFavorite={handleOnFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};
