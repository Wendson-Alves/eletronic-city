import CardStocks from "@/components/CardStocks/CardStocks";
import LayoutType1 from "@/layouts/LayoutType1";
import styles from "./Stocks.module.scss";

const Stocks = () => {
  return (
    <>
      <LayoutType1 title={"Stocks"}>
        <h1 className="container" style={{ marginTop: 60 }}>
          Stocks
        </h1>
        <section className={`${styles.stocks} ${"container"}`}>
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
          <CardStocks
            image={"./imagens/background-4.png"}
            text={"Digite o texto"}
          />
        </section>
      </LayoutType1>
    </>
  );
};

export default Stocks;
