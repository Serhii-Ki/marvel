import RandomSection from "../../components/randomSection/RandomSection.tsx";
import CharactersSection from "../../components/charactersSection/CharactersSection.tsx";

import styles from './CharactersPage.module.css';
import bgHero from '../../assets/bg-asset.png';

function CharactersPage() {
  return (
      <div className={styles['page-wrap']}>
        <RandomSection/>
        <CharactersSection/>
        <div className={styles['bg-hero']}>
          <img src={bgHero} alt={'hero picture'}/>
        </div>
      </div>
  );
}

export default CharactersPage;