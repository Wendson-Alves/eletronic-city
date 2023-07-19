import ButtonType1 from '@/components/Buttons/ButtonType1/ButtonType1';
import styles from './CardProductType1.module.scss'
import { useState } from 'react';

const CardProductType1 = () => {
  const title2 = 'search-2'  
  const [mudar, setMudar] = useState('add to card')

  return (
    <div className={styles.card_product_type_1}>
      <ButtonType1 title={mudar}/>
      <button onClick={() => {setMudar('search')}} >
        mudar titulo
      </button>
    </div>
  );
}
 
export default CardProductType1;