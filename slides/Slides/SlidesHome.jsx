import styles from '@/slides/Slides/SlidesHome.module.scss'
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const SlideHome = () => {
  return (
    <>
      <section className={styles.slide}>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, navigation, Pagination]}
          className="mySwiper"
      
        >
          <SwiperSlide>
            <img src="./imagens/notebook.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imagens/notebook.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imagens/notebook.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
;}


export default SlideHome;