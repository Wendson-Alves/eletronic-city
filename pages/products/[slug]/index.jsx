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
  const [dataProduct, setDataProduct] = useState(undefined);
  const [img, setImg] = useState();

  useEffect(() => {
    if (router.query.slug !== undefined) {
      axios
        .get(`http://localhost:3000/api/products/${router.query.slug}`)
        .then((res) => {
          setDataProduct(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query.slug]);

  useEffect(() => {
    setImg(dataProduct?.image?.[0]);
  }, [dataProduct?.image]);

  return (
    <LayoutType1 title={"Product"}>
      {dataProduct !== undefined && (
        <section className={`container ${styles.slug}`}>
          {/*{router.pathname}*/}
          <>
            <div className={styles.imagens}>
              <div className={styles.imagens_secundarias}>
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
              <div className={styles.about}>
                <h4>about products</h4>
                <div >
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
      )}
    </LayoutType1>
  );
};

export default PageProduct;
