import styles from './ErrorPage.module.css';

import gif from '../../assets/page_not_found.gif';

function ErrorPage() {
  return (
      <div className={styles.wrapper}>
        <img src={gif} alt={'page not found'} className={styles.gif}/>
      </div>
  );
}

export default ErrorPage;