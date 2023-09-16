import ButtonType1 from '@/components/Buttons/ButtonType1/ButtonType1';
import styles from './CardProductType1.module.scss'
import { useState } from 'react';
import { Rate } from 'antd';

const CardProductType1 = ({title, stock, promotion, code, image, discount, price, rate, className}) => {

  return (
    <div className={`${styles.card_product_type_1} ${className}`}>
      {stock > 0 && (
        <span>In stock</span>
      )}
      {promotion > 0 &&(
        <em className={styles.promotion}>Promotion -{promotion}%</em>
      )}
      <a href="http://localhost:3000/about_products"><img src= {image} alt="" /></a>
      <em className={styles.product_code}>{code}</em>
      <h3>{title}</h3>
      <Rate  allowHalf disabled defaultValue={rate} style={{color: '#f26522', fontSize: 12, alignSelf:'flex-start', margin: '15px 0' }}/>  
      <div className={styles.product_price}>
        <div>
          <s>R${discount}</s> <br/>
          <h3>R${price}</h3>
        </div>
      <ButtonType1 title={'Add to car'}/>
      </div>
    </div>
  );
}
export default CardProductType1;