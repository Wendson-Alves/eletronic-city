import styles from './ButtonType1.module.scss' 

const ButtonType1 = ({title, age}) => {
  return (
    <button className={styles.button_type_1}>
      {title}
    </button>
  );
}
 
export default ButtonType1;