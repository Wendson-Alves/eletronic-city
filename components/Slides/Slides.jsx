import styles from "./Slide.module.scss";

const Slide = ({ image, title, text, color }) => {
  return (
    <section className={`${styles.slide} ${color}`}>
      <div>
        <div className={styles.description}>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
        {image}
      </div>
    </section>
  );
};

export default Slide;
