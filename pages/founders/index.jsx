import styles from "@/pages/founders/index.module.scss";
import axios from "axios";
import  { useState, useEffect } from 'react'
import CardShoppingCart from "@/components/CardShoppingCart/CardShoppingCart";
import LayoutType1 from "@/layouts/LayoutType1";

const PageFounders = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/people')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <LayoutType1>
    <section className= {`container ${styles.container}`}>
    {/* {JSON.stringify(products)} */}
   <CardShoppingCart
    data={products}
   />
    </section>
    </LayoutType1>
  )
}

export default PageFounders