import CardProductType1 from "@/components/Cards/CardProductType1/CardProductType1";
import { formatCurrencyNumber } from "@/helpers/formatNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import LayoutType1 from "@/layouts/LayoutType1";
import { useEffect, useState } from "react";
import axios from "axios";
import calcPercent from "@/helpers/calcPercent";
import ListProductsType1 from "@/components/Lists/ListProductsType1/ListProductsType1";

const ProductPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <LayoutType1>
      <section className="container">
        <ListProductsType1
          data={products}
          title={'Smartphone'}
          filterPerCategory={'smartphones'}
        />
        <ListProductsType1
          data={products}
          title={'Notebooks'}
          filterPerCategory={'notebooks'}
        />
      </section>
    </LayoutType1>
  );
}
 
export default ProductPage;