import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { Button, Input } from "..";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TypeForm = {
  title: string;
  description: string;
};

export const Form = () => {
  const [seed] = useState(uuidv4());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForm>();
  const navigate = useNavigate();

  const onSubmit = (data: TypeForm) => {
    axios
      .post("http://localhost:3000/products", {
        ...data,
        img: `https://picsum.photos/seed/${seed}/300/300`,
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/products");
        }
      });
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <Link to="/products" className={style.form__link}>
        ← Назад
      </Link>
      <div className={style.form__inputs}>
        <Input
          register={register}
          label="title"
          error={errors.title?.message}
          required={{ value: true, message: "Это поле обязательное" }}
          placeholder="Заголовок"
          minLength={10}
        />
        <textarea
          className={style.form__textarea}
          placeholder="Описание"
          {...register("description", {
            required: {
              value: true,
              message: "Это поле обязательное",
            },
            minLength: {
              value: 20,
              message: "Минимальная длина 20 символов",
            },
          })}
        ></textarea>
      </div>

      <Button type="submit">Создать</Button>
    </form>
  );
};
