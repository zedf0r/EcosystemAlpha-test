import { Link, useParams } from "react-router";
import style from "./ProductCard.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@/services/store/store";

export const ProductCard = () => {
  const { id } = useParams();
  const { allProducts } = useSelector((state: RootState) => state.products);
  const product = allProducts.find((item) => item.id === id);

  if (!product) {
    return "Продукт не найден";
  }

  return (
    <article className={style.product}>
      <Link to="/products" className={style.product__link}>
        ← Назад
      </Link>
      <div className={style.product__details}>
        <div className={style.product__img}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={style.product__info}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </article>
  );
};
