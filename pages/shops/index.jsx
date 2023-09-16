import LayoutType1 from "@/layouts/LayoutType1";
import styles from "@/pages/shops/Shops.module.scss";
import Location from "@/components/Location/CardLocation"

const Shops = () => {
  return (
    <LayoutType1 title={"Shops"}>
      <h1 className="container" style={{ marginTop: 50 }}>
        Shops
      </h1>
      <section className={`${styles.container} ${"container"}`}>
        <div>
          <p>
            Seu site é seu cartão de visitas. Por isso, os textos precisam ser
            caprichados e relevantes
          </p>
          <ul>
            <h4>Eletronic city</h4>
            <li>Seu site é seu cartão de visitas.</li>
            <li>Seu site é seu cartão de visitas.</li>
            <li>Seu site é seu cartão de visitas.</li>
            <li>Seu site é seu cartão de visitas.</li>
          </ul>
          <p>
            Seu site é seu cartão de visitas. Por isso, os textos precisam ser
            caprichados e relevantes
          </p>
        </div>
        <img src="./imagens/background-6.png" alt="" />
        <div>
          <ul className={styles.locations}>
            <Location
              location={'Varzea Alegre - CE'}
              address={'Seu site é seu cartão de visitas.'}
              phone={'Seu site é seu cartão de visitas.'}
              email={'Seu site é seu cartão de visitas.'}
              work={'Seu site é seu cartão de visitas.'}
              img={'./imagens/background-6.png'}
            />
            <Location
              location={'Varzea Alegre - CE'}
              address={'Seu site é seu cartão de visitas.'}
              phone={'Seu site é seu cartão de visitas.'}
              email={'Seu site é seu cartão de visitas.'}
              work={'Seu site é seu cartão de visitas.'}
              img={'./imagens/background-6.png'}
            />
            <Location
              location={'Varzea Alegre - CE'}
              address={'Seu site é seu cartão de visitas.'}
              phone={'Seu site é seu cartão de visitas.'}
              email={'Seu site é seu cartão de visitas.'}
              work={'Seu site é seu cartão de visitas.'}
              img={'./imagens/background-6.png'}
            />
            <Location
              location={'Varzea Alegre - CE'}
              address={'Seu site é seu cartão de visitas.'}
              phone={'Seu site é seu cartão de visitas.'}
              email={'Seu site é seu cartão de visitas.'}
              work={'Seu site é seu cartão de visitas.'}
              img={'./imagens/background-6.png'}
            />
           
          </ul>
        </div>
      </section>
    </LayoutType1>
  );
};

export default Shops;
