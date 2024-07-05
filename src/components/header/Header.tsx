import cn from 'classnames'
import styles from './Header.module.css'

function Header() {
  return (
      <header className={styles.header}>
        <a href='#'>
          <img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7g2CT0skpr9eVcstZoeTNsNLkXgzLacZZkX75w2dv_2VIgo_M7kSLhfV9EsgR6T71ItM&usqp=CAU' alt='marvel logo'/>
        </a>
        <div className={styles.options}>
          <span className={cn(styles.items, styles.text, styles['text-active'])}>Characters</span>
          <span className={styles.items}>/</span>
          <span className={cn(styles.items, styles.text)}>Comics</span>
        </div>
      </header>
  );
}

export default Header;