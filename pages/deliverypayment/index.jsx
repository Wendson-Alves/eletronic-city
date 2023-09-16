import Text from "@/components/TextDeliveryAndPayment/Text";
import LayoutType1 from "@/layouts/LayoutType1";
import styles from "@/pages/deliverypayment/deliverypayment.module.scss"

const Delivery = () => {
  return (
    <>
      <LayoutType1 title={"Delivery and Payment"}>
        <h1 className="container" style={{ marginTop: 60 }}>
          Delivery and Payment
        </h1>   
        <section  className={`${styles.delivery} ${'container'}`}>
        <div>
          <Text 
            className="container"
            text='Where does it come from?'
          />
          <Text 
            className="container"
            text='Where does it come from?'
          />
          <Text 
            className="container"
            text='Where does it come from?     '
          />
          <Text 
            className="container"
            text='Where does it come from?'
          />
          </div>
          <div>
          <Text 
            className="container"
            text='Where does it come from?'
          />
          <Text 
            className="container"
            text='Where does it come from?'
          />
          <Text 
            className="container"
            text='Where does it come from?'
          />
          <Text 
            className="container"
            text='Where does it come from?'
          />
        </div>
        </section>
      </LayoutType1>
    </>
  );
};

export default Delivery;
