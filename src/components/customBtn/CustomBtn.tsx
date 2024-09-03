import cn from "classnames";

import styles from "./customBtn.module.css";

type Props = {
  title: string;
  mode?: "main";
};

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
