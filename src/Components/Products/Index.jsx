import React from 'react'
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

import styles from './styles.module.scss'

const Products = () => {
  const {addItemToCart} = useContext(CartContext)
   const [products, setProduct] = useState([])

   useEffect(() => { 
    const getProducts = async() => {
      const request = await fetch("http://localhost:3000/ProductsData")
      const response = await request.json()
      setProduct(response)
    } 
    getProducts();
   }, [])
   
  
   return (
    <div className={styles.productsContainer}>
        {products.map((product, i) => (
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