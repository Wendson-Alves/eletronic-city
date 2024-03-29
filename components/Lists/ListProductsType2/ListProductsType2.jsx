import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListProductsType2.module.scss'
import CardProductType1 from '@/components/Cards/CardProductType1/CardProductType1';
import calcPercent from '@/helpers/calcPercent';
import { formatCurrencyNumber } from '@/helpers/formatNumber';
import { Navigation } from 'swiper/modules';
import formattedURL from '@/helpers/formattedURL';



const ListProductsType1 = ({
  title,
  data,
  filterPerCategory,
  style,
}) => {
  return (
    <section style={style}>
      <div className={styles.group_header}>
        <h2>{title}</h2>{" "}
        {/* Criar os botoes de navegacao do swiper, com ''navegation'' */}
        <div className={styles.buttons}>
          <button id={`prev-${title}`}><img src="/imagens/arrow-left.svg" alt="" /></button>
          <button id={`next-${title}`}><img src="/imagens/arrow-right.svg" alt="" /></button>
        </div>
      </div>
      <Swiper
        navigation={{
          prevEl: `#prev-${title}`,
          nextEl: `#next-${title}`,
        }}
        modules={[Navigation]}
        className={styles.swiper}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          992: {
            slidesPerView: 4,
          },
        }}
        grabCursor
      >

        {data.map((product, index) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={index}>
              <CardProductType1
                title={product.title}
                stock={product.stock}
                code={product.id}
                rate={product.rating}
                link={`/products/${formattedURL(product.title)}`}
                //promotion={calcPercent(product.price, product.discount, index >= 0 && index <= 2 ? 1 : 0)}
                promotion={calcPercent(product.price, product.discount)}
                image={product.image[0]}/*passar o array da image - [0]*/
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
};

export default ListProductsType1;
