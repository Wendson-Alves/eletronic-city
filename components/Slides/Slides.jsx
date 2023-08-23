import styles from './Slide.module.scss'

const Slide = ({ image, title, text, color }) => {

  return (
    <div className={styles.slide} style={{background : {color}}}>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {image}
    </div>
  );

}

export default Slide;