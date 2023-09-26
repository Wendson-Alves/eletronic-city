import LayoutType1 from "@/layouts/LayoutType1";
import styles from "@/pages/products/[slug]/Slug.module.scss";
import ButtonType1 from "@/components/Buttons/ButtonType1/ButtonType1";
import { Rate } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ImgSecondary from "@/components/ImgSecondary/ImgSecondary";

const PageProduct = () => {
  const router = useRouter();
  const [dataProduct, setDataProduct] = useState({});
  const [img, setImg] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${router.query.slug}`)
      .then((res) => {
        setDataProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [router.query.slug]);

  useEffect(() => {
    setImg(dataProduct.image?.[0]);
  }, [dataProduct.image]);

  return (
    <LayoutType1 title={"Product"}>
      <section className={`container ${styles.slug}`}>
        {JSON.stringify()}
        {/*{router.pathname}*/}
        <>
          <h1>{dataProduct.title}</h1>
          <div className={styles.imagens}>
            <div style={{ marginRight: "50px" }}>
              <ImgSecondary
                onClick={() => {
                  setImg(dataProduct.image?.[0]);
                }}
                img={dataProduct.image?.[0]}
              />
              <ImgSecondary
                onClick={() => {
                  setImg(dataProduct.image?.[1]);
                }}
                img={dataProduct.image?.[1]}
              />
              <ImgSecondary
                onClick={() => {
                  setImg(dataProduct.image?.[2]);
                }}
                img={dataProduct.image?.[2]}
              />
            </div>
            <img src={img} alt="" />
            <div className="container">
              <h4>about products</h4>
              <div className={styles.about}>
                <ul>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                </ul>
                <ul>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                  <li>resolvemos listar vantagens</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>R${dataProduct.price}</h3>
              <ButtonType1 title={"add to card"} />
            </div>
            <div>
              {" "}
              <Rate
                allowHalf
                disabled
                defaultValue={dataProduct.rating}
                style={{
                  display: "flex",
                  color: "#f26522",
                  fontSize: 12,
                  alignSelf: "flex-start",
                  margin: "15px 0",
                }}
              />
              <em> In stock: {dataProduct.stock}</em>
            </div>
          </div>
        </>
      </section>
    </LayoutType1>
  );
};

export default PageProduct;
