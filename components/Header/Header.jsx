/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [showSales, setShowSales] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header
      className={styles.header}
      onMouseLeave={() => {
        setShowSales(false);
      }}
    >
      <nav>
        <div className={`${styles.container} container`}>
          <ul>
            <li>
              <Link href="http://localhost:3000">Home</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/products">Products</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/stocks">Stock</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/deliverypayment">
                Delivery and payment
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowSales(true);
                }}
              >
                Sales
              </button>
            </li>
            <li>
              <Link href="http://localhost:3000/about">Abount company</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/shops">Shops</Link>
            </li>
          </ul>
          <ul>
            <li>
            
                <Link href="http://localhost:3000/carrinho"><img src="/imagens/carrinho.png" alt="" /></Link>
            </li>
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
          <button
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img src="imagens/line-icon.svg" alt="" />
          </button>
          {showMenu && (
            <>
              <div
                className={styles.backdrop}
                onClick={() => {
                  setShowMenu(false);
                }}
              ></div>
              <div className={styles.line}>
                <ul>
                  <li>
                    <Link href="http://localhost:3000">Home</Link>
                  </li>
                  <li>
                    <Link href="http://localhost:3000/products">Products</Link>
                  </li>
                  <li>
                    <Link href="http://localhost:3000/stocks">Stock</Link>
                  </li>
                  <li>
                    <Link href="">Services</Link>
                  </li>
                  <li>
                    <Link href="http://localhost:3000/deliverypayment">
                      Delivery and payment
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowSales(true);
                      }}
                    >
                      Sales
                    </button>
                  </li>
                  <li>
                    <Link href="http://localhost:3000/about">
                      Abount company
                    </Link>
                  </li>
                  <li>
                    <Link href="http://localhost:3000/shops">Shops</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
      {showSales && (
        <div className={`${styles.sales} container`}>
          <ul>
            <li>
              <Link href="">
                <img src="imagens/city-icon.svg" alt="" />
                Eletronic city
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="imagens/location-icon.svg" alt="" />
                Saint-pertersburg
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="imagens/phone-icon.svg" alt="" />
                4002-8922
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="imagens/cart-icon.svg" alt="" /> in-basket
              </Link>
            </li>
          </ul>
        </div>
      )}{" "}
      {/** os dois && serve para verificação de flase e true */}
      <section>
        <div className={`${styles.search_bar} container`}>
          <div className={styles.catalog}>
            <img src="imagens/grid-icon.svg" alt="" />
            <em>Products</em>
          </div>
          <input type="text" />
          <button>Search</button>
        </div>
      </section>
    </header>
  );
};

export default Header;

{
  /**criar evento a um elemento: 
1° crio a const e passo os nomes (ex: const [showMenu, setShowMenu] = useState(false)).
2° no elemento que eu quero criar o evendo, eu especifico 
qual evento quero criar (ex: onClick).
3° faço a verificação da propriedade (ex: showElemento && ( aqui coloco todo o codigo
  que sera verificado se é verdadeiro ou falso))
*/
}
