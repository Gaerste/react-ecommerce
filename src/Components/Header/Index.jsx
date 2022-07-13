import React from 'react'

import styles from './styles.module.scss'

const Header = () => {
  return (
        <header className={styles.containerHeader}>
            <div className={styles.containerTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bandage" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="14" y1="12" x2="14" y2="12.01" />
                <line x1="10" y1="12" x2="10" y2="12.01" />
                <line x1="12" y1="10" x2="12" y2="10.01" />
                <line x1="12" y1="14" x2="12" y2="14.01" />
                <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
            </svg>
            <h1>AG SHOP</h1>
            </div>
            <div className={styles.containerNav}>
            <nav>
                <ul className={styles.liContainer}>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                </ul>
            </nav>
            <button type="submit" className={styles.loginBtn}>Login</button>
            </div>
        </header>
  )
}

export default Header