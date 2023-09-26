import styles from "@/components/ImgSecondary/ImgSecondary.module.scss"

const ImgSecondary = ({img, onClick}) => {

  return (
    <div className={styles.img}>
      <img onClick={onClick} src={img} alt="" />
    </div>
  );
};

export default ImgSecondary;
