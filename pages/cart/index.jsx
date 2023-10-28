import { useState, useEffect } from "react";
import LayoutType1 from "@/layouts/LayoutType1";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ListCart from "@/components/ListCart/ListCart";

const Cart = ({ title }) => {
  const router = useRouter();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <LayoutType1 title={"Shopping cart"}>
        <section className="container">
          <h1 style={{ marginTop: 50, marginBottom: 50 }}>Shopping cart</h1>
          <div
            style={{
              width: "70%",
              display: "grid",
              gridTemplateColumns: "50% 30% 20%",
            }}
          >
            <p>Product</p>
            <p>Quantity</p>
            <p>Amount</p>
          </div>
          <div style={{ marginTop: 25 }}>
            {state.dataCart.dataCart?.length === 0 ? (
              <div>
                <h3>Carrinho vazio</h3>{" "}
              </div>
            ) : (
              <ListCart
                data={state.dataCart.dataCart}
                price={state.dataCart.dataCart}
              />
          
            )}
          </div>
        </section>
      </LayoutType1>
    </>
  );
};
export default Cart;
