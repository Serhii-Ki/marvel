import {useEffect} from "react";
import {useSelector} from "react-redux";

import CardCharacter from "../cardCharacter/CardCharacter.tsx";
import hero from '../../assets/hero.png'
import CustomBtn from "../customBtn/CustomBtn.tsx";
import ComicsItem from "../comicsItem/ComicsItem.tsx";
import {RootState, useAppDispatch} from "../../store/store.ts";
import {fetchCharacters} from "../../store/charactersThunk.ts";

import styles from './CharactersSection.module.css'

function CharactersSection() {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch]);

  return (
      <main className={styles.wrapper}>

        <div className={styles['left-section']}>
          <div className={styles['card-wrapper']}>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
            <CardCharacter title={'Hero'}/>
          </div>
          <div className={styles['load-btn']}>
            <CustomBtn title={'LOAD MORE'} type={'main'}/>
          </div>
        </div>

        <div>

          <div className={styles['right-section']}>
            <div className={styles.options}>
              <img src={hero} alt='character photo' className={styles.img}/>
              <div className={styles['options-block']}>
                <h3 className={styles.title}>LOKI</h3>
                <div className={styles['btn-wrap']}>
                  <CustomBtn title={'HOMEPAGE'} type={'main'}/>
                  <CustomBtn title={'WIKI'} type={'secondary'}/>
                </div>
              </div>
            </div>
            <p className={styles.text}>
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the
              brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
              the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion
              Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In
              addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
            <h4 className={styles.subtitle}>
              Comics:
            </h4>
            <div className={styles['comics-wrapper']}>
              <ComicsItem title={'All-Winners Squad: Band of Heroes (2011) #3'}/>
              <ComicsItem title={'Alpha Flight (1983) #50'}/>
              <ComicsItem title={'Amazing Spider-Man (1999) #503'}/>
              <ComicsItem title={'Amazing Spider-Man (1999) #504'}/>
              <ComicsItem title={'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)'}/>
              <ComicsItem title={'Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)'}/>
              <ComicsItem title={'Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)'}/>
            </div>
          </div>

          <div className={styles['search-form']}>
            <h4 className={styles['search-title']}>Or find a character by name:</h4>
            <div className={styles['enter-wrap']}>
              <input type='text' placeholder='Enter name' className={styles['search-input']}/>
              <CustomBtn title={'FIND'} type={'main'}/>
            </div>
          </div>

        </div>

      </main>
  );
}

export default CharactersSection;