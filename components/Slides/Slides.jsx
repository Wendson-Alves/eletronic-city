import styles from "./Slide.module.scss";

const Slide = ({ image, title, text, color }) => {
  return (
    <section className={`${styles.slide} ${color}`}>
      <div>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        {image}
      </div>
    </section>
  );
};

export default Slide;
