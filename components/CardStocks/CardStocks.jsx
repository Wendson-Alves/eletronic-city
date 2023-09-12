import styles from "@/components/CardStocks/CardStocks.module.scss";

const CardStocks = ({ image, text }) => {
  return (
    <div className={styles.cardstocks}>
      <button>
        <img src={image} alt="" />
        <p>{text}</p>
      </button>
    </div>
  );
};

export default CardStocks;
