import cn from 'classnames'
import styles from './CustomBtn.module.css'

type BtnPropsType = {
  title: string
  type: 'main' | 'secondary'
}

function CustomBtn(props: BtnPropsType) {
  return (
      <button className={cn(styles.btn, {
        [styles.main]: props.type ==='main',
        [styles.secondary]: props.type ==='secondary',
      })}>
        {props.title}
      </button>
  );
}

export default CustomBtn;