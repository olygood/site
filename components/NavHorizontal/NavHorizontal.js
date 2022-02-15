import React from 'react';
import styles from './NavHorizontal.module.scss'
import Link from 'next/link'

export default function NavHorizontal() {
  return(
  <div className={styles.navhorizontal}>
    <Link  href='/'>
        <a>Acceuil</a>
    </Link>
    <Link href='/ui'>
      <a>Ui</a>
  </Link>
  <Link href='/game'>
      <a>Game</a>
  </Link>
  <Link href='/contact'>
      <a>Contact</a>
  </Link>
    
  </div>) 
}
