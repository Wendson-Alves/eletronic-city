import LayoutType1 from "@/layouts/LayoutType1";
import CardProductType1 from "@/components/Cards/CardProductType1/CardProductType1";
import { formatCurrencyNumber } from "@/helpers/formatNumber";

const About = () => {
  return (
    <LayoutType1 title={"About Products"}>
    <section  className="container">
      <h1 style={{ marginTop: 50 }}>
        About Products
      </h1>
      <CardProductType1
        title={"Xbox 360"}
        stock={15}
        code={"PC18653"}
        rate={4}
        promotion={25}
        image={"https://i.ibb.co/d4RKjrv/aaaaaaa.png"}
        discount={formatCurrencyNumber(39700, "compact")}
        price={formatCurrencyNumber(35900)}
      />
      </section>
    </LayoutType1>
  );
};

export default About;
