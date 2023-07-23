import Header from "@/components/Header/Header";
import Head from "next/head";

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
    </>
  ); 
}
 
export default LayoutType1;