import "swiper/css";
import LayoutType1 from "@/layouts/LayoutType1";
import { useEffect, useState } from "react";
import axios from "axios";
import calcPercent from "@/helpers/calcPercent";
import ListProductsType2 from "@/components/Lists/ListProductsType2/ListProductsType2";
import SlideHome from "@/slides/Slides/SlidesHome";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <LayoutType1 title={"Products"}>
      <section className="container">
        <SlideHome />
        <ListProductsType2
          data={products.filter((e) => e.price <= 1250)}
          title={"Menores Preços"}
          style={{ marginTop: 20 }}
        />
      </section>
    </LayoutType1>
  );
};

export default ProductPage;
