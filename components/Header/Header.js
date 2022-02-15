import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import oli from "../../public/assets/img/olilettres.png";

export default function Header(props) {
  console.log(props)
  return (
    <header className={styles.header}>
      <div className={styles.containerImgL}>
        <Image src={oli} width="713" height="1049" />
      </div>

      <div className={styles.titleCenter}>
        <h1>OLYGOOD</h1>
        <div>
          <h1></h1>
        </div>
      </div>

      <div className={styles.containerImgR}>
        <p>Developer</p>
        <p>Gamer</p>
        
      </div>
    </header>
  );
}

export async function getStaticProps(){
  const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  const data = await quote.json()
  return {
    props:{
      data
    }
  }
}
// https://goquotes-api.herokuapp.com/api/v1/random?count=1