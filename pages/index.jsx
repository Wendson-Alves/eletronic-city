import CardProductType1 from "@/components/Cards/CardProductType1/CardProductType1";
import { formatCurrencyNumber } from "@/helpers/formatNumber";
import LayoutType1 from "@/layouts/LayoutType1";
import Link from "next/link";
import Slide from "@/slides/Slides/SlidesHome";
import SlideHome from "@/slides/Slides/SlidesHome";

const home = () => {
  return (
    <LayoutType1 title={"Home"}>
      <section className="container">
      <SlideHome/>
        {/* <Link href={'/about'}>
         About
        </Link> */}
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
      </section>
    </LayoutType1>
  );
}

export default home;