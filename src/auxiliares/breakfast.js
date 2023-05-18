import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import Products from './Product';


export default function Breakfast() {

  const selectedProducts = [];
  const handleClick = (product) => {
    selectedProducts.push(product);
    console.log(selectedProducts)
    // selectedProducts([nuevoProducto])
  }

  return (
    <section className={styles.bg_breakfast}>
      <Products
        name='Café Americano'
        stock={true} costo='$5'
        id='1'
        src='https://bittercoffees.com/wp-content/uploads/2022/02/Cafe%CC%81-Americano-.jpeg' />

      <Products
        name='Café con Leche'
        stock={true} costo='$7'
        id='2'
        src='https://www.eltiempo.com/uploads/2023/01/31/63d92a122f24b.jpeg' />

    </section>
  )
}