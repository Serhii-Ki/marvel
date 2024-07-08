import cn from 'classnames'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
  return (
      <header className={styles.header}>
        <a href='#'>
          <img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7g2CT0skpr9eVcstZoeTNsNLkXgzLacZZkX75w2dv_2VIgo_M7kSLhfV9EsgR6T71ItM&usqp=CAU' alt='marvel logo'/>
        </a>
        <div className={styles.options}>
          <NavLink to={'/characters'} className={({isActive, isPending} ) => cn(styles.link, {
            [styles['text-active']]: isActive,
            '': isPending
          })}>
            <span>Characters</span>
          </NavLink>
          <span className={styles.items}>/</span>
          <NavLink to={'/comics'} className={({isActive, isPending} ) => cn(styles.link, {
            [styles['text-active']]: isActive,
            '': isPending
          })}>
            <span>Comics</span>
          </NavLink>
        </div>
      </header>
  );
}

export default Header;