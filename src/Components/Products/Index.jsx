import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { ProductsData } from "../../Data/ProductsData";

import styles from './styles.module.scss'

const Products = () => {
  const {addItemToCart} = useContext(CartContext)
  
  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - {product.price + ' €'}
            </p>
          </div>
          <button onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products