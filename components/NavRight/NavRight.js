import Link from 'next/link';
import React from 'react';
import styles from './NavRight.module.scss'

export default function NavRight() {
  return (
    <nav className={styles.navRight}>
        <div className={styles.top}>petit logo</div>
            <Link href=''>
                <a>un</a>
            </Link>
            <Link href=''>
                <a>deux</a>
            </Link>
            <Link href=''>
                <a>trois</a>
            </Link>
    </nav>

    
  ) 
}
