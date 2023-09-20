import styles from "@/components/TextDeliveryAndPayment/Text.module.scss";
import { useState } from "react";
import { Collapse } from "react-collapse";

const Text = ({ text, response }) => {

  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
      <div className={styles.text}>
        <button
          onClick={() => {
            setShowPayment(!showPayment);
          }}
        >
          {text}
        </button>
      </div>
      <Collapse isOpened={showPayment}>
        <div className={styles.p}>
          <p>
            {response}
          </p>
        </div>
      </Collapse>
    </>
  );
};

export default Text;
