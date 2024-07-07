import styles from './ComicsItem.module.css'

type ComicsItemPropsType =  {
  title: string
}

function ComicsItem(props : ComicsItemPropsType) {
  return (
      <div className={styles.wrapper}>
        <p className={styles.text}>{props.title}</p>
      </div>
  );
}

export default ComicsItem;