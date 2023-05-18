import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Lunch from './Lunch.js';
import Breakfast from './Breakfast.js'
import AddOrder from './AddOrd'

export default function Order(props) {

  const [orderCount, setOrderCount] = useState(0);
 

  return (
    <section className={styles.bg_order}>
      <div className={styles.data_client}>
        <h3 className={styles.h3}>DATOS DE CLIENTE</h3>
        <div className={styles.input_group}>
          <input id="nameClient" placeholder="Nombre"></input>
          <input id="numberTable" placeholder="Mesa"></input>
        </div>
      </div>
      <div className={styles.data_order}>
        <h3 className={styles.h3}>DATOS DEL PEDIDO</h3>
        <div className={styles.order_group}>  <br></br>
          <p>{Breakfast.selectedProducts}</p>

          <div className={styles.items_quantity} >
            <button className={styles.buttonCount}
              onClick={() => {
                if (orderCount > 0) {
                  setOrderCount(orderCount - 1);
                }
              }}
            >
              -
            </button>
              <p> {orderCount}</p>
              <button className={styles.buttonCount} onClick={() => setOrderCount(orderCount + 1)}>+</button>
          </div>
        </div>
        <h4>Total de pedido</h4>
        <button className={styles.send_order}>Enviar Pedido</button>
      </div>
    </section>
  )
}




// function ProductOrder() {
//   const [orderCount, setOrderCount] = useState(0);

//   const buttonIncrement = () => {
//     setOrderCount(orderCount + 1);
//   }

//   const buttonDecrement = () => {
//     if (orderCount > 0) {
//       setOrderCount(orderCount - 1);
//     }
//   }


// }