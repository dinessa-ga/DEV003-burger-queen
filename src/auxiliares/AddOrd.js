import { useState } from 'react';
import {AddProduct} from './Buttons'

export default function AddOrder(){

    const [productos, setProductos] = useState([])

    const agregarProductos = () => {
        const nuevoProducto = {nombre: 'Nombre producto'};
        setProductos([...productos, nuevoProducto])
    }

    return(
        <>
        <ul>
            {productos.map((producto, i) => (
                <li key={i}>{producto.nombre}</li>
            ))}
        </ul>
        <AddProduct onClick={agregarProductos}/>
        </>
    )
}