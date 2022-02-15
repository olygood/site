import React from "react";
import styles from './Card2.module.scss'
import Image from "next/image";
import imgCode from '../../public/assets/img/imgCode.jpg'
{/* <Image src={imgCode} layout="responsive" width="5917" height="3945" /> */}

export default function Card(props) {

  return (
    <div className={styles.card2}>
        <div className={styles.card2_cardDescription}>
            <h3>desciption de la card en dessous de limage</h3>
                <p>20/10/2010</p>
                
        </div>
    </div>
  );
}
