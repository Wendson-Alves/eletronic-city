import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListProductsType1.module.scss'
import CardProductType1 from '@/components/Cards/CardProductType1/CardProductType1';
import calcPercent from '@/helpers/calcPercent';
import { formatCurrencyNumber } from '@/helpers/formatNumber';



const ListProductsType1 = ({title, data, filterPerCategory}) => {
  return (
    <> 
    <h2>{title}</h2> {/* Criar os botoes de navegacao do swiper, com ''navegation'' */}
    <Swiper
      slidesPerView={4}
      grabCursor
    >
      {data.filter((item) =>{
        return (
          item.category === filterPerCategory
        )
      }).map((product, index) => {
        return (
          <SwiperSlide key={index}>
            <CardProductType1
              title={product.title}
              stock={product.stock}
              code={product.id}
              rate={product.rating}
              //promotion={calcPercent(product.price, product.discount, index >= 0 && index <= 2 ? 1 : 0)}
              promotion={calcPercent(product.price, product.discount)}
              image={product.image}
              discount={formatCurrencyNumber(product.discount, 'compact')}
              price={formatCurrencyNumber( product.price)}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
    </>
  );
}
 
export default ListProductsType1;