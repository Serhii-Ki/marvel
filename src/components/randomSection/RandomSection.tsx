
import styles from './RandomSection.module.css';
import CustomBtn from "../customBtn/CustomBtn.tsx";

import topImg from '../../assets/tor.png';
import randomImg from '../../assets/random.png'

function RandomSection() {
  return (
      <div className={styles.wrapper}>
        <div className={styles['left-section']}>
          <img src={topImg} alt='marvel ' className={styles.img}/>
          <div>
            <h3 className={styles.title}>Tor</h3>
            <p className={styles.text}>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
            <div className={styles['btn-wrap']}>
              <CustomBtn title={'HOMEPAGE'} type={'main'}/>
              <CustomBtn title={'WIKI'} type={'secondary'}/>
            </div>
          </div>
        </div>
        <div className={styles['right-section']}>
          <p className={styles['right-text']}>Random character for today!<br/>
            Do you want to get to know him better?</p>
          <p className={styles['right-text']}>
            Or choose another one
          </p>
          <CustomBtn title={'TRY IT'} type={'main'}/>
          <img src={randomImg} alt={'attribute'} className={styles['random-img']}/>
        </div>
      </div>
  );
}

export default RandomSection;