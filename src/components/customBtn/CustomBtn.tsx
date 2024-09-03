import cn from "classnames";

import styles from "./customBtn.module.css";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  mode?: "main";
} & ButtonHTMLAttributes<HTMLButtonElement>;

function CustomBtn(props: Props) {
  return (
    <button
      {...props}
      className={cn(styles.btn, {
        [styles.main]: props.mode === "main",
      })}
    >
      {props.title}
    </button>
  );
}

export default CustomBtn;
