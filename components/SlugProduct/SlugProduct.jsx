import ButtonType1 from "../Buttons/ButtonType1/ButtonType1";
import { Rate } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "@/components/SlugProduct/SlugProduct.module.scss"

const SlugProduct = (rate, onClick) => {
  const router = useRouter();
  const [dataProduct, setDataProduct] = useState({});
  const [img, setImg] = useState();

 const Click = () => {
    setImg(img === dataProduct.image ? "/imagens/smartphone.png" : dataProduct.image);
 };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${router.query.slug}`)
      .then((res) => {
        setDataProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [router.query.slug]);

  return (
    <>
      <h1>{dataProduct.title}</h1>
      <div className={styles.imagens}>
        <ul>
          <li >
            <img onClick={Click} src="/imagens/smartphone.png" alt="" />
          </li>
          <li>
            <img onClick={Click} src="/imagens/notebook.png" alt="" />
          </li>
          <li>
            <img onClick={Click} src="/imagens/notebook.png" alt="" />
          </li>
        </ul>
          <img src= {img} alt="" />
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
      <div>
        <h3>R${dataProduct.price}</h3>
        <ButtonType1 title={"add to card"} />
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
        <em>{dataProduct.code}</em>
      </div>
    </>
  );
};
export default SlugProduct;
