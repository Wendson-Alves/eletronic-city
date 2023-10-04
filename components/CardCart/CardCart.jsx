import React, { useEffect } from "react";
import styles from "@/components/CardCart/CardCart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { setDataCart } from "@/redux/dataCart";

const CardCart = ({ minus, more, data }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeCart = (title) => {
    const productsSelected = data?.filter((item) => {
      return item.title === title;
    });
    const productsCartRemovedItem = data?.filter((item) => {
      return item.title !== title;
    });
    const arrayCompleted = [
      ...productsSelected.slice(1),
      ...productsCartRemovedItem,
    ];

    dispatch(setDataCart(arrayCompleted));
    localStorage.setItem("dataCart", JSON.stringify(arrayCompleted));
  };

  const addCart = (object) => {
    const data = [
      ...state.dataCart.dataCart,
      {
        title: object.title,
        image: object.image,
        promotion: object.promotion,
        stock: object.stock,
        code: object.code,
        rate: object.rate,
        discount: object.discount,
        link: object.link,
      },
    ];
    dispatch(setDataCart(data));
    localStorage.setItem("dataCart", JSON.stringify(data));
  };

  // useEffect(() => {
  //   console.log(_.uniqBy(data, "title").sort((a, b) => {
  //     return a.code - b.code
  //   }));
  // }, [])

  return (
    <>
      {_.uniqBy(data, "title")
        .sort((a, b) => {
          return a.code - b.code
        })
        .map((productCart, index) => {
          return (
            <div className={styles.cart} key={index}>
              {/* {JSON.stringify(
                productCart
              )} */}
              <ul>
                <li>
                  <div>
                    <img src={productCart.image} alt="" />
                    <h5>{productCart.title}</h5>
                  </div>
                  <div>
                    <button onClick={() => removeCart(productCart.title)}>
                      {minus}
                    </button>
                    {/* onClick={{ () => dispatch(setCountCart(countCart > 0 ? countCart - 1 : countCart )) }} } */}
                    <div style={{ width: "40%", justifyContent: "center" }}>
                      {
                        data?.filter((product) => {
                          return product.title === productCart.title;
                        }).length
                      }
                    </div>
                    <button
                      onClick={() => {
                        addCart(productCart);
                      }}
                    >
                      {more}
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h4>${productCart.price}</h4>
                    <strike>{productCart.discount}</strike>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}{" "}
    </>
  );
};

export default CardCart;
