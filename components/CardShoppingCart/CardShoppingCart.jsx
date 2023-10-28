// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import CardCart from "../CardCart/CardCart";
// import calcPercent from "@/helpers/calcPercent";
// import { formatCurrencyNumber } from "@/helpers/formatNumber";
// import formattedURL from "@/helpers/formattedURL";

// const CardShoppingCart = ({ data }) => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   // const countCart = state.countCart.countCart

//   return (
//     <>
//       {data?.map((product, index) => {
//           return (
//             <div key={index}>
//               <CardCart
//                 minus={"-"}
//                 more={"+"}
//                 title={product.title}
//                 code={product.id}
//                 //promotion={calcPercent(product.price, product.discount, index >= 0 && index <= 2 ? 1 : 0)}
//                 image={product.image[0]} /*passar o array da image - [0]*/
//                 discount={formatCurrencyNumber(product.discount, "compact")}
//                 price={formatCurrencyNumber(product.price)}
//               />
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default CardShoppingCart;

import React from 'react'
import Founders from '../Founders/Founders'
import styles from '@/components/CardShoppingCart/CardShoppingCart.module.scss'

const CardShoppingCart = ({ data }) => {
  return (
    <>
       {data?.map((people, index) => {
      return(
        <div  key={index}>
        <Founders
          age={people.age}
          image={people.image}
          title={people.name}
          profession={people.profession}
        />
        </div>
      )
    })
    }
    </>
  )
}

export default CardShoppingCart