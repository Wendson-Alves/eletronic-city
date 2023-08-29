import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const LayoutType1 = ({children, title=''}) => {
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