import type { Path, UseFormRegister } from "react-hook-form";
import style from "./Input.module.scss";

type TypeForm = {
  title: string;
  description: string;
};

export const Input = ({
  register,
  error,
  required,
  label,
  placeholder,
  minLength,
}: {
  register: UseFormRegister<TypeForm>;
  label: Path<TypeForm>;
  error?: string;
  required: { value: boolean; message: string };
  placeholder: string;
  minLength: number;
}) => {
  return (
    <div className={style.input__box}>
      <input
        {...register(label, {
          required,
          minLength: {
            value: minLength,
            message: `Минимальная длина ${minLength} символов`,
          },
        })}
        placeholder={placeholder}
        className={style.input}
      />
      <span className={style.error}>{error}</span>
    </div>
  );
};
