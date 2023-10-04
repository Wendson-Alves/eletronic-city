import { useState, useEffect } from "react";
import LayoutType1 from "@/layouts/LayoutType1";
import axios from "axios";
import CardShoppingCart from "@/components/CardShoppingCart/CardShoppingCart";
import { useRouter } from "next/router";
import formattedURL from "@/helpers/formattedURL";
import { useDispatch, useSelector } from "react-redux";
import setDataCart from "@/redux/dataCart";
import CardCart from "@/components/CardCart/CardCart";

const Cart = ({ title }) => {
  const router = useRouter();
  const [products, setProduct] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
              <CardCart
                data={state.dataCart.dataCart}
              />
          
            )}
          </div>
        </section>
      </LayoutType1>
    </>
  );
};
export default Cart;
