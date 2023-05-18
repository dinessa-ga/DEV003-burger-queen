import { useState } from 'react';

export function Counter(){

  const [orderCount, setOrderCount] = useState(0);

    return (
        <>
        <div className={styles.items_quantity} >
            <button className={styles.buttonCount}
              onClick={() => {setOrderCount(orderCount - 1) }}>-</button>
            <p> {orderCount}</p>
            <button className={styles.buttonCount} onClick={() => setOrderCount(orderCount + 1)}>+</button>
        </div>
        </>
    )
}

export function AddProduct({onClick}){
  return(
    <>
    <button onClick={onClick}>AGREGAR</button>
    </>
  )
}






















