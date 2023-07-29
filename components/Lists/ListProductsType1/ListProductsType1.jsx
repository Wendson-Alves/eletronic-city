import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListProductsType1.module.scss'
import CardProductType1 from '@/components/Cards/CardProductType1/CardProductType1';
import calcPercent from '@/helpers/calcPercent';
import { formatCurrencyNumber } from '@/helpers/formatNumber';
import { Navigation } from 'swiper/modules';



const ListProductsType1 = ({ title, data, filterPerCategory, style, showPopulars=false}) => {
  return (
    <section style={style}>
      <div className={styles.group_header}>
        <h2>{title}</h2> {/* Criar os botoes de navegacao do swiper, com ''navegation'' */}
        <div className={styles.buttons}>
          <button id={`prev-${title}`}>Prev</button>
          <button id={`next-${title}`}>Next</button>
        </div>
      </div>
      <Swiper
        navigation={{
          prevEl: `#prev-${title}`, 
          nextEl: `#next-${title}`
        }}
        modules={[Navigation]}
        className={styles.swiper}
        breakpoints={{
          768: {
            slidesPerView: 3
          },

          992: {
            slidesPerView: 4
          }
        }}
        grabCursor
      >
        {data.filter((item) => {
          return (
            item.category === filterPerCategory
              && (showPopulars && item.rating >= 4 || !showPopulars && item)
                && item
          )
        }).map((product, index) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={index}>
              <CardProductType1
                title={product.title}
                stock={product.stock}
                code={product.id}
                rate={product.rating}
                //promotion={calcPercent(product.price, product.discount, index >= 0 && index <= 2 ? 1 : 0)}
                promotion={calcPercent(product.price, product.discount)}
                image={product.image}
                discount={formatCurrencyNumber(product.discount, 'compact')}
                price={formatCurrencyNumber(product.price)}
                className={styles.card_product}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default ListProductsType1;