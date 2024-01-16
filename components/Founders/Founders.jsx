/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styles from "@/components/Founders/Founders.module.scss";
import { useEffect } from "react";
import axios from "axios";

const Founders = ({ data }) => {
  return data.map((people, index) => {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.imgbox}>
            <img src={people.image} alt="" />
          </div>
          <div className={styles.content}>
            <h2>{people.name}</h2>
            <span>{people.profession}</span>
            <button>Conheça mais</button>
          </div>
        </div>
      </div>
    );
  });
};

export default Founders;
