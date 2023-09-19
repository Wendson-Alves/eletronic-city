import LayoutType1 from "@/layouts/LayoutType1";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageProduct = () => {
  const router = useRouter()
  const [dataProduct, setDataProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${router.query.slug}`)
      .then(res => {
        setDataProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [router.query.slug])
  
  return (
    <LayoutType1 title={"Product"}>
      {JSON.stringify(dataProduct)}
      <br />
      {router.pathname}
      <h1>{dataProduct.title}</h1>
      <img src={dataProduct.image} alt="Alguma coisa" />
    </LayoutType1>
  );
}
 
export default PageProduct;