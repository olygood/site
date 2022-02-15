import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header/Header'
import NavHorizontal from '../components/NavHorizontal/NavHorizontal'
import NavLeft from '../components/NavLeft/NavLeft';

export default function Contact() {
  return(
    <div className={styles.container}>
        
    <div className={styles.header}>
      <Header />
    </div>
    
    <div className={styles.main}>
        <h2>contactez moi</h2>
        <form>formulaire</form>
    </div>
    <div className={styles.navLL}>
      <NavLeft />
    </div>
    <div className={styles.navLR}></div>
    <div className={styles.footer}></div>
  </div>
        
    ) 
}