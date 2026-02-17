import style from "./ProductList.module.scss";
import { Card } from "../Card/Card";
import { useProducts } from "../hooks/useProducts";

type TypeFilter = "all" | "favorite";

export const ProductList = () => {
  const {
    setFilter,
    handleOnDelete,
    handleOnFavorite,
    productsToRender,
    favoriteSet,
  } = useProducts();

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
