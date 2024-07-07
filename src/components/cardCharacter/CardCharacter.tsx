import styles from './CardCharacter.module.css';
import hero from '../../assets/hero.png'

type CardCharacterPropsType = {
  title: string
}

function CardCharacter(props: CardCharacterPropsType) {
  return (
      <div className={styles.card}>
        <img src={hero} alt='character' className={styles.img}/>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
  );
}

export default CardCharacter;