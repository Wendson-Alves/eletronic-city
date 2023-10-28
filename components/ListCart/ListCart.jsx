import React, { useEffect } from "react";
import styles from "@/components/ListCart/ListCart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import dataCart, { setDataCart, setPrice } from "@/redux/dataCart";

const ListCart = ({ data }) => {
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
        price: object.price,
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

  const initialValue = [];
  const arrayValores  = state.dataCart.dataCart
  .map((product) => product.price)
  
  const total = arrayValores.reduce((accumulator, Value,) => accumulator + Value, initialValue);

  
  

  // useEffect(() => {
  //   console.log(_.uniqBy(data, "title").sort((a, b) => {
  //     return a.code - b.code
  //   }));
  // }, [])

  {
    /* {JSON.stringify(
    productCart
  )} */
  }
  return (
    <div className={styles.cart}>
      <ul>
        {_.uniqBy(data, "title")
          .sort((a, b) => {
            return a.code - b.code;
          })
          .map((productCart, index) => {
            return (
              <>
                <li key={index}>
                  <div>
                    <img src={productCart.image} alt="" />
                    <h5>{productCart.title}</h5>
                  </div>
                  <div>
                    <button onClick={() => removeCart(productCart.title)}>
                      {"-"}
                    </button>
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
                      {"+"}
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
              </>
            );
          })}{" "}
        {state.dataCart.dataCart?.length === 0 ? (
          " "
        ) : (
          <li
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <span>
              Total : <h4> {total}</h4> 
            </span>
            
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListCart;

// const ModalQRCodeType1 = ({
//   isShow,
//   clickBackdrop,
//   loadingPixReq,
//   generatePix = () => {},
//   loadingNewPixReq,
//   onPaymentConfirmed = () => {},
//   clickOpenNow = () => {},
//   generateNewPix = () => {},
//   qtdRelics,
//   configQtd = { minus: () => {}, plus: () => {}, changeInput: () => {} },
//   data,
//   dataRelic,
// }) => {
//   const STATES_PAYMENT = {
//     BUYING: "BUYING",
//     AWAITING: "AWAITING",
//     APPROVED: "APPROVED",
//     EXPIRED: "EXPIRED",
//   };
//   const [api, contextHolder] = notification.useNotification();
//   const [initialDate, setInitialDate] = useState();
//   const [expireDate, setExpireDate] = useState();
//   const [percentExpire, setPercentExpire] = useState();
//   const [watchPayment, setWatchPayment] = useState(false);
//   const [statusPayment, setStatusPayment] = useState(STATES_PAYMENT.BUYING);
//   const [inventoryIdAfterPayment, setInventoryIdAfterPayment] = useState("");
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const openNotification = (
//     type,
//     placement,
//     message,
//     description,
//     duration = 5,
//     onClose = () => {}
//   ) => {
//     api[type]({ message, description, placement, duration, onClose });
//   };

//   const callMessageSuccessCopy = () => {
//     openNotification(
//       "success",
//       "bottomRight",
//       "Código copiado!",
//       "Cole esse código em seu aplicativo do banco para realizar o pix."
//     );
//   };

//   useEffect(() => {
//     if (statusPayment === STATES_PAYMENT.AWAITING) {
//       setInitialDate(new Date().getTime()), setExpireDate(initialDate + 600000);
//       let a = setInterval(() => {
//         setPercentExpire(calcPercentBetweenDates(initialDate, expireDate));
//       }, 1000);

//       return () => clearInterval(a);
//     }
//   }, [statusPayment, initialDate]);

//   useEffect(() => {
//     if (percentExpire >= 100 && statusPayment === STATES_PAYMENT.AWAITING) {
//       setStatusPayment(STATES_PAYMENT.EXPIRED);
//     }

//     if (percentExpire < 100 && statusPayment === STATES_PAYMENT.APPROVED) {
//       setTimeout(() => {
//         setStatusPayment(STATES_PAYMENT.APPROVED);
//       }, 100);
//     }
//   }, [percentExpire, statusPayment]);

//   useEffect(() => {
//     if (isShow && statusPayment === STATES_PAYMENT.AWAITING) {
//       let time = setTimeout(() => {
//         getPaymentPerId(
//           data?.paymentId,
//           (res) => {
//             const history = JSON.parse(res.data.history);
//             const lastStatus = history[history.length - 1].status;
//             if (lastStatus === "approved") {
//               setStatusPayment(STATES_PAYMENT.APPROVED);
//               dispatch(setIdRelicAftePayment(res.data.extraInfo.id[0]));
//               onPaymentConfirmed()
//             } else if (lastStatus === "sent") {
//               setWatchPayment(!watchPayment);
//             } else if (statusPayment === STATES_PAYMENT.EXPIRED) {
//               setWatchPayment("not_watch");
//             }
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       }, 5000);

//       return () => clearTimeout(time);
//     }
//   }, [isShow, statusPayment, watchPayment]);

//   const resetVar = (props = { initialState: STATES_PAYMENT.BUYING }) => {
//     setInitialDate("");
//     setExpireDate("");
//     setPercentExpire("");
//     setStatusPayment(props.initialState);
//   };

//   useEffect(() => {
//     loadingNewPixReq === false &&
//       resetVar({ initialState: STATES_PAYMENT.AWAITING });
//   }, [loadingNewPixReq]);

//   useEffect(() => {
//     loadingPixReq === false && setStatusPayment(STATES_PAYMENT.AWAITING);
//   }, [loadingPixReq]);

//   return (
//     <ModalContainer
//       isShow={isShow}
//       clickBackdrop={clickBackdrop}
//       onExited={() => resetVar()}
//     >
//       {contextHolder}
//       <div
//         className={`${styles.modal} ${
//           statusPayment === STATES_PAYMENT.AWAITING
//             ? styles.awaiting
//             : statusPayment === STATES_PAYMENT.EXPIRED
//             ? styles.expired
//             : statusPayment === STATES_PAYMENT.APPROVED
//             ? styles.approved
//             : statusPayment === STATES_PAYMENT.BUYING
//             ? styles.buying
//             : ""
//         }`}
//       >
//         <div
//           className={"btn-close"}
//           role="button"
//           onClick={(e) => {
//             e.preventDefault(), clickBackdrop();
//           }}
//         >
//           <img
//             src="/img/icons/close-white.svg"
//             loading="lazy"
//             height={20}
//             width={20}
//             alt="Close white"
//           />
//         </div>
//         {(statusPayment === STATES_PAYMENT.AWAITING ||
//           statusPayment === STATES_PAYMENT.EXPIRED) && (
//           <header>
//             <div>
//               <img
//                 src={dataRelic?.image}
//                 loading="lazy"
//                 height={100}
//                 width={100}
//                 alt={dataRelic?.name}
//               />
//               <div>
//                 <span>
//                   <b>R$ {formatCurrencyNumber(dataRelic?.price * qtdRelics)}</b>{" "}
//                   - {qtdRelics} unId.
//                 </span>
//                 <span>{dataRelic?.name}</span>
//               </div>
//             </div>
//             <div>
//               <img
//                 src="/img/icons/shield-outline-white.svg"
//                 loading="lazy"
//                 height={20}
//                 width={20}
//                 alt=""
//               />
//               Ambiente seguro
//             </div>
//           </header>
//         )}
//         {statusPayment === STATES_PAYMENT.BUYING && (
//           <>
//             <h5>Resumo da compra</h5>
//             <div className={styles.header}>
//               <div>
//                 <img
//                   src={dataRelic?.image}
//                   loading="lazy"
//                   height={100}
//                   width={100}
//                   alt={dataRelic?.name}
//                 />
//                 <div>
//                   <span>
//                     <b>
//                       R$ {formatCurrencyNumber(dataRelic?.price * qtdRelics)}
//                     </b>
//                   </span>
//                   <span>{dataRelic?.name}</span>
//                 </div>
//               </div>
//               <div className={styles.box_qnt}>
//                 <span>qtd:</span>
//                 <div>
//                   <button disabled={qtdRelics <= 1} onClick={configQtd.minus}>
//                     -
//                   </button>
//                   <input
//                     min={1}
//                     type="number"
//                     disabled={true}
//                     value={qtdRelics}
//                     onChange={configQtd.changeInput}
//                   />
//                   <button onClick={configQtd.plus}>+</button>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.box_resume_buy}>
//               <span>
//                 Total: {qtdRelics} ite{qtdRelics > 1 ? "ns" : "m"}{" "}
//               </span>
//               <span>
//                 R$ {formatCurrencyNumber(dataRelic?.price * qtdRelics)}
//               </span>
//               <ButtonType6
//                 text={"Gerar pix"}
//                 loading={loadingPixReq}
//                 onClick={generatePix}
//                 style={{ width: "100%", maxWidth: 340 }}
//               />
//             </div>
//           </>
//         )}
//         {statusPayment === STATES_PAYMENT.AWAITING && (
//           <>
//             <h4>Finalize o pagamento utilizando o Pix!</h4>
//             <span role="alert">
//               <img
//                 src="/img/info-white.svg"
//                 loading="lazy"
//                 height={20}
//                 width={20}
//                 alt="Info white"
//               />
//               Atenção! Só será aceito pagamentos da mesma titularidade!
//             </span>
//             <p>
//               Você pode utilizar a câmera do seu celular para ler o QR Code ou
//               copiar o código e pagar no aplicativo de seu banco:
//             </p>
//             <div className={styles.box_qrcode}>
//               <img src={data?.qrCode} alt="" />
//             </div>
//             <div className={styles.copy}>
//               <h5>
//                 <img src="/img/logo-pix.svg" alt="" />
//                 Pix Copia e Cola
//               </h5>
//               <div className={styles.content_copy}>
//                 <div className={styles.text_copy}>
//                   <p>{data?.pixCopiaECola}</p>
//                   <button
//                     disabled={percentExpire > 100}
//                     onClick={() => {
//                       callMessageSuccessCopy();
//                       navigator.clipboard.writeText(data?.pixCopiaECola);
//                     }}
//                   >
//                     Copiar
//                   </button>
//                 </div>
//                 <div className={styles.box_expire}>
//                   {percentExpire < 100 && (
//                     <div className={styles.marker_expire}>
//                       <div
//                         className={styles.thumb_expire}
//                         style={{ width: `${100 - percentExpire}%` }}
//                       ></div>
//                     </div>
//                   )}
//                   <div className={styles.count}>
//                     <img
//                       src="/img/time-type-5.svg"
//                       loading="lazy"
//                       height={20}
//                       width={20}
//                       alt=""
//                     />
//                     Seu código expira em:
//                     <CountDownDateType6
//                       date={expireDate}
//                       style={{
//                         color: "#AA69FD",
//                         fontWeight: 500,
//                         marginLeft: 4,
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {statusPayment === STATES_PAYMENT.EXPIRED && (
//           <>
//             <h4>Opsss... O Pix do seu pedido expirou!</h4>
//             <p>
//               Você pode gerar um novo QR Code e pagar agora mesmo ou voltar e
//               escolher novos itens para o seu pedido!{" "}
//             </p>
//             <ButtonType6
//               loading={loadingNewPixReq}
//               onClick={() => {
//                 generateNewPix();
//               }}
//               text={"Gerar Pix Novamente"}
//             />
//             <Link
//               className={styles.link}
//               href={`${ROUTES.PANDA_STORE}`}
//               title={"Voltar para Panda Store"}
//             >
//               Voltar para Panda Store
//             </Link>
//           </>
//         )}
//         {statusPayment === STATES_PAYMENT.APPROVED && (
//           <>
//             <h4>Chegooouuu!!!</h4>
//             <p>
//               {qtdRelics === 1 ? (
//                 <>
//                   Já está no seu Inventário, mas{" "}
//                   <strong>você pode abrir a sua Relíquia agora!</strong>
//                 </>
//               ) : (
//                 <>Suas Relíquias já estão no seu Inventário!</>
//               )}
//             </p>
//             <div className={styles.box_image}>
//               <img
//                 src={dataRelic?.image}
//                 loading="lazy"
//                 height={50}
//                 width={50}
//               />
//               {qtdRelics > 1 && <span>{qtdRelics}x</span>}
//             </div>
//             {dataRelic?.mapFragmentQty > 0 && (
//               <div className={styles.map_fragments}>
//                 <img
//                   src="/img/icons/fragment-map.svg"
//                   loading="lazy"
//                   height={30}
//                   width={30}
//                   alt=""
//                 />
//                 <p>
//                   Você ganhou <b>{dataRelic?.mapFragmentQty * qtdRelics}</b> <br /> Fragmentos de Mapa!
//                 </p>
//               </div>
//             )}
//             {qtdRelics === 1 ? (
//               <>
//                 <ButtonType6
//                   style={{
//                     display: "flex",
//                     width: "250px",
//                     justifyContent: "center",
//                   }}
//                   onClick={clickOpenNow}
//                   text={"Abrir agora"}
//                 />
//                 <Link
//                   className={styles.link}
//                   href={`${ROUTES.INVENTARY}`}
//                   title={"Ver no Inventário"}
//                 >
//                   Ver no Inventário
//                 </Link>
//               </>
//             ) : (
//               <ButtonType6
//                 style={{
//                   display: "flex",
//                   width: "250px",
//                   justifyContent: "center",
//                 }}
//                 link={ROUTES.INVENTARY}
//                 text={"Ver no inventário"}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </ModalContainer>
//   );
// };

// export default ModalQRCodeType1;
