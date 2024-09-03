import { InputHTMLAttributes } from "react";

import styles from "./customInput.module.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ ...props }: Props) {
  return <input className={styles.input} {...props} />;
}

export default CustomInput;
