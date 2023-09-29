import { useState, useEffect } from "react";
import LayoutType1 from "@/layouts/LayoutType1";
import CardShoppingCart from "@/components/CardShoppingCart/CardShoppingCart";

const Cart = () => {
 
  return (
    <>
      <LayoutType1 title={"Shopping cart"}>
        <section className="container">
          <h1 style={{ marginTop: 50, marginBottom: 50 }}>Shopping cart</h1>
          <div style={{width: "70%", display:'grid', gridTemplateColumns: "50% 30% 20%" }}>
            <p>Product</p>
            <p>Quantity</p>
            <p>Amount</p>
          </div>
          <CardShoppingCart
            minus={"-"}
            more={"+"}
           />       
        </section>
      </LayoutType1>
    </>
  );
};
export default Cart;
