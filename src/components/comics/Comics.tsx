import styles from './Comics.module.css';

import comics from '../../assets/comics.png';
function Comics() {
  return (
      <div className={styles.wrapper}>
        <img src={comics} alt={'comics'} className={styles.img}/>
        <p className={styles.title}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
        <span className={styles.price}>9.99$</span>
      </div>
  );
}

export default Comics;