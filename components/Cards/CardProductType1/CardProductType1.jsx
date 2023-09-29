import ButtonType1 from "@/components/Buttons/ButtonType1/ButtonType1";
import styles from "./CardProductType1.module.scss";
import { useState, useEffect } from "react";
import { Rate } from "antd";
import React from "react";
import Link from "next/link";
import formattedURL from "@/helpers/formattedURL";
import { useDispatch, useSelector } from "react-redux";
import { setCountCart } from "@/redux/countCart";
import { setDataCart } from "@/redux/dataCart";

const CardProductType1 = ({
  onClick,
  title,
  stock,
  link = "/",
  promotion,
  code,
  image,
  discount,
  price,
  rate,
  className,
}) => {

  const dispatch = useDispatch()
  const state = useSelector (state => state)

  return (
    <div className={`${styles.card_product_type_1} ${className}`}>
      {stock > 0 && <span>In stock</span>}
      {promotion > 0 && (
        <em className={styles.promotion}>Promotion -{promotion}%</em>
      )}
      <img src={image} alt="" />
      <Link href={link}>
        <h3>{title}</h3>
      </Link>
      <em className={styles.product_code}>{code}</em>
      <Rate
        allowHalf
        disabled
        defaultValue={rate}
        style={{
          color: "#f26522",
          fontSize: 12,
          alignSelf: "flex-start",
          margin: "15px 0",
        }}
      />
      <div className={styles.product_price}>
        <div>
          <s>R${discount}</s> <br />
          <h3>R${price}</h3>
        </div>
        <ButtonType1 title="Add to cart" onClick={() => {
          dispatch(setCountCart(state.countCart.countCart + 1))
        }} />
      </div>
    </div>
  );
};
export default CardProductType1;
