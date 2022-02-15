import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import NavLeft from "../components/NavLeft/NavLeft";
import Card from "../components/Card/Card";
import Card2 from '../components/Card2/Card2'
// api call of duty https://codapi.dev
// const ApiCallOfDutty = require('call-of-duty-api')();
// const ApiCallOfDutty = require('call-of-duty-api')({ platform: "battle" });

export default function Ui() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.main}>
        <h1>Bienvenu dans mes interfaces</h1>
        <div className={styles.contenu}>
          <Card />
          <Card2 className= {styles.cardSide} />
        </div>
      
      </div>
      <div className={styles.navLL}>
        <NavLeft />
      </div>
      <div className={styles.navLR}></div>
      <div className={styles.footer}></div>
    </div>
  );
}
