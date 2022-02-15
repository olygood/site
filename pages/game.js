import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import Header from "../components/Header/Header"
import NavLeft from "../components/NavLeft/NavLeft"
import Card from "../components/Card/Card"

export default function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.main}>
        <div className={styles.mainTitle}>
          <h2>Bienvenu dans Mes jeux</h2>
        </div>

        <div className={styles.containerGame}>
          <Card />
          <Card />
          <Card />
          <Card />
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
