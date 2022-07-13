import React from 'react'
import Cart from '../Cart/Index'
import Footer from '../Footer/Index'
import Products from '../Products/Index'


import styles from './styles.module.scss'

const Home = () => {
  return (
  
    <div className={styles.home}>
        <Cart />
        <Products />
        <Footer />
    </div>
    
  )
}

export default Home