import styles from './ComicsSection.module.css';
import Comics from "../comics/Comics.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";

function ComicsSection() {
  return (
      <div>
        <div className={styles['comics-wrap']}>
          <Comics/>
          <Comics/>
          <Comics/>
          <Comics/>
          <Comics/>
          <Comics/>
          <Comics/>
          <Comics/>
        </div>
        <div className={styles['load-btn']}>
          <CustomBtn title={'LOAD MORE'} type={'main'}/>
        </div>
      </div>
  );
}

export default ComicsSection;