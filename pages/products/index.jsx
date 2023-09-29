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
  const [items, setItems] = useState([1, 2, 3, 4]);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

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
    <LayoutType1 title={'Products'}>
      <section className="container">
    <button onClick={() => {
      setItems('items', localStorage.getItem(items + 1))
    }}>aa
    </button>
        <ListProductsType1
          data={products}
          title={'Smartphone'}
          filterPerCategory={'smartphones'}
          style={{marginTop: 20}}
        />
        <ListProductsType1
          data={products}
          title={'Notebooks'}
          filterPerCategory={'notebooks'}
          style={{marginTop: 20}}
        />
        <ListProductsType1
          data={products}
          title={'Hits'}
          filterPerCategory={'hits'}
          style={{marginTop: 20}}
          showPopulars
        />
      </section>
    </LayoutType1>
  );
}
 
export default ProductPage;