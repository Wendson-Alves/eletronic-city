import CardProductType1 from "@/components/Cards/CardProductType1/CardProductType1";
import { formatCurrencyNumber } from "@/helpers/formatNumber";


const home = () => {
  return (
    <section>
      <CardProductType1
      title={'Xbox 360'}
      stock={15}
      code={'PC18653'}
      rate={4}
      promotion={25}
      image={'https://i.ibb.co/d4RKjrv/aaaaaaa.png'}
      discount={formatCurrencyNumber(39700,'compact')}
      price={formatCurrencyNumber(35900)}
      />
    </section>
  );
}
 
export default home;