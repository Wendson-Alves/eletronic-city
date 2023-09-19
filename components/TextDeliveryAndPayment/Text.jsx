import styles from "@/components/TextDeliveryAndPayment/Text.module.scss";
import { useState } from "react";
<<<<<<< Updated upstream
import { Collapse } from "react-collapse";

const Text = ({ text, response }) => {
=======

const Text = ({ text }) => {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
      <Collapse isOpened={showPayment}>
        <div className={styles.p}>
          <p>
            fsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddg
          </p>
        </div>
      </Collapse>
=======
      {showPayment && (
        <>
          <div className={styles.p}>
            <p>
              fsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddg
            </p>
          </div>
        </>
      )}
>>>>>>> Stashed changes
    </>
  );
};

export default Text;
