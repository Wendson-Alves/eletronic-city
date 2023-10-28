import React, { useState } from "react";
import styles from "@/components/Founders/Founders.module.scss";
import { useEffect } from "react";
import axios from "axios";


const Founders = ({ image, title, profession }) => {


  return (
    <div className={styles.container}>
     <div className={styles.box}>
        <div className={styles.imgbox}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>{profession}</span>
          <button>Conheça mais</button>
        </div>
      </div>
    </div>
  );
};

export default Founders;
