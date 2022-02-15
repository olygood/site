import React from "react";
import styles from './Card.module.scss'
import Image from "next/image";
import imgCode from '../../public/assets/img/imgCode.jpg'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={imgCode} layout="responsive" width="5917" height="3945" />
      </div>
      <div className={styles.cardDescription}>
        <h3>desciption de la card en dessous de limage</h3>
        <p>20/10/2010</p>
      </div>
    </div>
  );
}
