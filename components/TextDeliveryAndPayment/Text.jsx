import styles from "@/components/TextDeliveryAndPayment/Text.module.scss";
import { useState } from 'react';

const Text = ({text}) => {

  const [showPayment, setShowPayment] = useState(false)

  return (
    <>
    <div  className={styles.text}>
      <button onClick={() => { setShowPayment (!showPayment)}}>
       {text}
      </button>
      </div>
      
    {showPayment && (
      <>
        <div className={styles.p}>
          <p>
            fsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddgfsdgfdddddddddddddg
          </p>
        </div>
      </>
    )}</>
  )
}

export default Text;
