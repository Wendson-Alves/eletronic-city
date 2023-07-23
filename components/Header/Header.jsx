import { useState } from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';

const Header = () => {

  const [showSales, setShowSales] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={styles.header} onMouseLeave={() => { setShowSales(false) }} >
      <nav>
        <div className={`${styles.container} container`}>
          <ul>
            <li><Link href="">Abount company</Link></li>
            <li><Link href="">News</Link></li>
            <li><Link href="">Shops</Link></li>
            <li><Link href="">Stock</Link></li>
            <li><Link href="">Services</Link></li>
            <li><Link href="">Delivery and payment</Link></li>
            <li><button onClick={() => { setShowSales(true) }}>Sales</button></li>
          </ul>
          <ul>
            <li><a href="">aaaa</a></li>
            <li><a href="">aaaa</a></li>
            <li><a href="">aaaa</a></li>
          </ul>
          <button onClick={() => { setShowMenu(true) }}><img src="imagens/line-icon.svg" alt="" /></button>
          {showMenu && (
            <>
              <div className={styles.backdrop} onClick={() => { setShowMenu(false) }}></div>
              <div className={styles.line}>
                <ul>
                  <li><Link href="">Abount company</Link></li>
                  <li><Link href="">News</Link></li>
                  <li><Link href="">Shops</Link></li>
                  <li><Link href="">Stock</Link></li>
                  <li><Link href="">Services</Link></li>
                  <li><Link href="">Delivery and payment</Link></li>
                  <li><button onClick={() => { setShowSales(true) }}>Sales</button></li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
      {showSales && (
        <div className={`${styles.sales} container`}>
          <ul>
            <li><Link href=""><img src="imagens/city-icon.svg" alt="" />Eletronic city</Link></li>
            <li><Link href=""><img src="imagens/location-icon.svg" alt="" />Saint-pertersburg</Link></li>
            <li><Link href=""><img src="imagens/phone-icon.svg" alt="" />4002-8922</Link></li>
            <li><Link href=""><img src="imagens/cart-icon.svg" alt="" /> in-basket</Link></li>
          </ul>
        </div>
      )}  {/** os dois && serve para verificação de flase e true */}
      <section>
        <div className={`${styles.search_bar} container`}>
          <div className={styles.catalog}>
            <img src="imagens/grid-icon.svg" alt="" /><em>Product catalog</em>
          </div>
          <input type="text" />
          <button>Search</button>
        </div>
      </section>
    </header>
  );
}

export default Header;