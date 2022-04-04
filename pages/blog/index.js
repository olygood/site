import React from 'react';
import styles from "./styles/blog.module.scss"
import Link from "next/link"
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';

export default function Blog(props) {
  console.log(props)
  return (
    <div className={styles.blogContainer}>
    <h1>Bienvenu sur mon Blog</h1>
    <p>Le blog des Développeurs Web</p>
      <div className={styles.content}>
        
        <div className={styles.items}>
          <div className={styles.card_body}>
            <div className={styles.card_title}>
              <h3>Liste des articles</h3>
            </div>
              <div className={styles.card_subtitle}>
                <h5>Maximisez votre culture web</h5>
              </div>
              <div className={styles.card_text}>
                <p> chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
              </div>
                <div className={styles.card_link}>
                      <Link href='/blog'>
                        <a>Visitez le blog</a>
                      </Link>
                  </div>
          </div>
         
        </div>

        <div className={styles.items}>
          <div className={styles.card_body}>
            <div className={styles.card_title}>
              <h3>Liste des articles</h3>
            </div>
              <div className={styles.card_subtitle}>
                <h5>Maximisez votre culture web</h5>
              </div>
              <div className={styles.card_text}>
                <p> chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
              </div>
                <div className={styles.card_link}>
                      <Link href='/blog'>
                        <a>Visitez le blog</a>
                      </Link>
                  </div>
          </div>
         
        </div>
        
      </div>
        
    </div>
  )
}
export async function getStaticProps(){
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await data.json();
  return {
    props:{
      articles
    }
  }
}