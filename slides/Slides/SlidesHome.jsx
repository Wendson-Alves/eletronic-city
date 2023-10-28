import styles from '@/slides/Slides/SlidesHome.module.scss'
import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import Slide from '@/components/Slides/Slides';

const SlideHome = () => {
  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
            <SwiperSlide>
            <Slide 
            color={styles.color}
            image={<img src="/imagens/notebook.png" alt="" />}
            title={'Super oferta da Eletronic City'}
            text={'Frete Gratis'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
            color={styles.color}
            image={<img src="/imagens/notebook.png" alt="" />}
            title={'Celular'} 
            text={'Lançamento celular ultima geração, tela de 10", 8G de Ram, memoria 128g'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
            color={styles.color}
            image={<img src="/imagens/tv.png" alt="" />}
            title={'Smart TV Samsung'} 
            text={'R$999 nova smart tv samsung'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
            image={<img src="/imagens/notebook.png" alt="" />}
            title={'Hits'} 
            text={'Lançamento celular ultima geração, tela de 10", 8G de Ram, memoria 128g'} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
            image={<img src="/imagens/notebook.png" alt="" />}
            title={'Game'} 
            text={'Lançamento celular ultima geração, tela de 10", 8G de Ram, memoria 128g'} 
            />
          </SwiperSlide>
        </Swiper>
    </>
  );
;}


export default SlideHome;