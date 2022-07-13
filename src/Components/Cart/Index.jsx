import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { ItemCart } from '../ItemCart/Index'


import styles from './styles.module.scss'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [productsLength, setProductsLength] = useState(0)
  
  const {cartItems} = useContext(CartContext)

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    )
  }, [cartItems])
  
  const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)
  
  return (
    <div className={styles.cartContainer}>
      <div  onClick={() =>{ setCartOpen(!cartOpen)}} className={styles.buttonCartContainer}>
        
        <div className={styles.buttonCart}>
          {!cartOpen ? (
          <svg  className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M10 10l4 4m0 -4l-4 4" />
           </svg>
          )}
        </div>
        {!cartOpen && <div className={styles.productsNumber}>{productsLength}</div>}
      </div>

      {cartItems && cartOpen && (
        <div className={styles.cart}>
          <h2>Your cart</h2>

          {cartItems.length === 0 ? <p className={styles.cartEmpty}>Your cart is empty</p> : (
            <div className={styles.productsContainer}>
              {cartItems.map((item, i) => (
              <ItemCart key={i} item={item}/>
            ))}</div>
          )}

          <h2 className={styles.total}>Total: ${total}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart