import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDataCart } from "@/redux/dataCart";

const LayoutType1 = ({children, title=''}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.getItem("dataCart") &&
      dispatch(setDataCart(JSON.parse(localStorage.getItem("dataCart"))))
  }, []);

  return (
    <>
      <Head>
        <title>{title} - Eletronic city</title>
      </Head>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  ); 
}
 
export default LayoutType1;