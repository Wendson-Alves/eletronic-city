import styles from "./MTI001.module.scss";

const MTI001 = () => {
  return (
    <div className={`${"container"} ${styles.infos}`} style={{ width: 1000 }}>
      <h1>Site diario de quixada</h1>
      <div className={styles.grid}>
        <div>
          <h3>Lorem ipsum adipisicing.</h3>
        </div>
        <div>
          <ul>
            <span>Analise</span>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
          </ul>
        </div>
        <div>
          <ul>
            <span>Analise</span>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
            <li><p>teste 123</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MTI001;
