import Link from "next/link";
import React from "react";
import styles from "./NavLeft.module.scss";
import Image from "next/image";
import CodePen from "../../public/assets/img/codepen.svg";
import Github from "../../public/assets/img/github.png";

export default function NavLeft() {
  return (
    <div className={styles.navLeft}>
      <div className={styles.container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/ui">
          <a>Ui</a>
        </Link>
        <Link href="/game">
          <a>Game</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>

      <div className={styles.reseaux}>
        
          <h2>Réseaux</h2>
            <div>
            <a href="https://codepen.io/your-work?cursor=ZD0wJm89MSZwPTEmdj00OTM2NzU4Nw=="target="_blank"><Image src={CodePen} layout="responsive" width="10" height="10" /></a>
              
              <a
            href="https://codepen.io/your-work?cursor=ZD0wJm89MSZwPTEmdj00OTM2NzU4Nw=="target="_blank">
            <p>Codepen</p>
          </a>

            </div>
        
        
          <div>
          <a  href="https://github.com/olygood"
            target="_blank"
            rel="noopener noreferrer"
          >  <Image src={Github} layout="responsive" width="10" height="10" /></a>
         
          <a
            href="https://github.com/olygood"
            target="_blank"
            rel="noopener noreferrer">
            <p>Github</p>
          </a>
          </div>
         
        
      </div>
    </div>
  );
}
