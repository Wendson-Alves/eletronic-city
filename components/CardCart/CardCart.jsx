import React from "react";
import styles from "@/components/CardCart/CardCart.module.scss";
import { useSelector, useDispatch } from "react-redux";

const CardCart = ({  minus, more, data }) => {
  const state = useSelector((state) => state);

  return (
    <>
      {data?.map((product, index) => {
        return (
          <div className={styles.cart} key={index}>
            <ul>
            
              <li>
                <div>
                  <img src={product.image} alt="" />
                  <h5>{product.title}</h5>
                </div>
                <div>
                  <button>{minus}</button>
                  {/* onClick={{ () => dispatch(setCountCart(countCart > 0 ? countCart - 1 : countCart )) }} } */}
                  <div style={{ width: "40%", justifyContent: "center" }}>
                    {state.dataCart.dataCart?.length || 0}
                  </div>
                  <button>{more}</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4>${product.price}</h4>
                  <strike>{product.discount}</strike>
                </div>
              </li>
            </ul>
          </div>
        );
      })}{" "}</>
  );
};

export default CardCart;
