import styles from "./Footer1.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.footer_nav} container`}>
          <div>
            <img src="/imagens/city-icon.svg" alt="" />
            <h2>Eletronic city</h2>
          </div>
          <ul>
            <li>
              <h3>Titulo</h3>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Titulo</h3>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Titulo</h3>
            </li>
            <li>
              <a href="">Texto nav</a>
            </li>
          </ul>
          <div>
            <h3>Titulo</h3>
            <ul>
              <li>
                <a href="">
                  <img src="/imagens/face.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/imagens/instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/imagens/twitter.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.footnotes} container`}>
          @ 2001-2022 asdfsgfdgf <p>asdfsdfasf</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
