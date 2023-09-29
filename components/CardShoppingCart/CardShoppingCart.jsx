import React, { useState } from "react";
import styles from "@/components/CardShoppingCart/CardShoppingCart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCountCart } from "@/redux/countCart";


const CardShoppingCart = ({ minus, more }) => {
  const [add, setAdd] = useState(0);
  const dispatch = useDispatch()
  const state = useSelector (state => state)

  const countCart = state.countCart.countCart

  return (
    <section className={styles.cart}>
      <ul>
        <li>
          <div>
            <img src={state.dataCart.image} alt="" />
            <h5>{state.dataCart.nome}</h5>
          </div>
          <div>
            <button onClick={() => {
          dispatch(setCountCart(countCart > 0 ? countCart - 1 : countCart ))
        }}>{minus}</button>
            {/* onClick={() => {
              setAdd(add > 0 ? add - 1 : add)
            }} */}
            <div style={{ width: "40%", justifyContent: "center" }}>{state.dataCart.quantity}</div>
            <button >{more}</button> 
            {/* onClick={() => {
              setAdd(add + 1)}} */}
          </div>
          <em>${state.dataCart.preco}</em>
        </li>
      </ul>
    </section>
  );
};

export default CardShoppingCart;
