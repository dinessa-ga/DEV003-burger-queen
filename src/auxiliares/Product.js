import styles from '@/styles/Home.module.css'
import {Add} from './Buttons'

export default function Products({name, costo, src}){
    return(
        <>
        <div className={styles.products_box}>
        <img src={src}></img>
        <p>{name}</p>
        <p>{costo}</p>
        </div>
        <Add/>
        </>
    )
}