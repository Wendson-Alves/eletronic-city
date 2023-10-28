import LayoutType1 from "@/layouts/LayoutType1";
import styles from "@/pages/shops/Shops.module.scss";
import Location from "@/components/Location/CardLocation";
import { useState, useEffect } from "react";
import axios from "axios";

const Shops = () => {
  const [location, setLocation] = useState();

  // {JSON.stringify(

  //   )}

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/location")
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <LayoutType1 title={"Shops"}>
      <h1 className="container" style={{ marginTop: 50 }}>
        Shops
      </h1>
      <section className={`${styles.container} ${"container"}`}>
        <div>
          {/* {JSON.stringify(location)} */}
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
        <img src="./imagens/maps1.png" alt="" style={{ border: " 1px solid black", width: '100%'}}/>
        <div className={styles.locations}>
          <Location data={location} />
        </div>
      </section>
    </LayoutType1>
  );
};

export default Shops;
