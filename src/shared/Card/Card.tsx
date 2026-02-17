import { Link } from "react-router";
import style from "./Card.module.scss";
import type { TypeProduct } from "@/types/products.type";
import { FavoriteIcon } from "@/assets/icons/FavoriteIcon";
import { TrashIcon } from "@/assets/icons/TrashIcon";
import clsx from "clsx";

export const Card = ({
  product,
  handleOnDelete,
  handleOnFavorite,
  isFavorite,
}: {
  product: TypeProduct;
  handleOnDelete: (product: TypeProduct) => void;
  handleOnFavorite: (product: TypeProduct) => void;
  isFavorite: boolean;
}) => {
  return (
    <Link to={product.id} className={style.card}>
      <article key={product.id} className={style.card__detail}>
        <div className={style.card__img}>
          <img src={product.img} alt={product.title} />
        </div>

        <p className={style.card__title}>{product.title}</p>
        <p className={style.card__description}>{product.description}</p>

        <div
          className={clsx(style.card__action, style.favorite__icon, {
            [style.active]: isFavorite,
          })}
          onClick={(event) => {
            event.preventDefault();
            handleOnFavorite(product);
          }}
        >
          <FavoriteIcon />
        </div>
        <div
          className={clsx(style.card__action, style.trash__icon)}
          onClick={(event) => {
            event.preventDefault();
            handleOnDelete(product);
          }}
        >
          <TrashIcon />
        </div>
      </article>
    </Link>
  );
};
