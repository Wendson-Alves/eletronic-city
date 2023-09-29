import CardProductType1 from "@/components/Cards/CardProductType1/CardProductType1";
import { formatCurrencyNumber } from "@/helpers/formatNumber";
import LayoutType1 from "@/layouts/LayoutType1";
import Link from "next/link";
import SlideHome from "@/slides/Slides/SlidesHome";
import styles from "@/pages/home.module.scss"

const home = () => {
  return (
    <LayoutType1 title={"Home"}>
      <section className="container">
      <SlideHome className={styles.color}/>
        {/* <Link href={'/about'}>
         About
        </Link> */}
        <div style={{ width:300 }}>
        <CardProductType1
          title={'Xbox 360'}
          stock={15}
          code={'PC18653'}
          rate={4}
          promotion={25}
          image={'https://i.ibb.co/d4RKjrv/aaaaaaa.png'}
          discount={formatCurrencyNumber(39700, 'compact')}
          price={formatCurrencyNumber(35900)}
        />
        </div>
      </section>
    </LayoutType1>
  );
}

export default home;