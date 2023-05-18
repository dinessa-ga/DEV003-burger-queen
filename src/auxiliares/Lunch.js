import styles from '@/styles/Home.module.css'
import Products from './Product';

export default function Lunch() {
    return (
        <section className={styles.bg_lunch}>
            <Products 
            name='Hamburguesa Simple' 
            stock={true} costo='$10' 
            id='1' 
            src='https://assets.unileversolutions.com/recipes-v2/210995.jpg'/>

            <Products 
            name='Hamburguesa Doble' 
            stock={true} 
            costo='$15' 
            id='2' 
            src='https://assets.unileversolutions.com/recipes-v2/210995.jpg' />

            <Products 
            name='Papas Fritas' 
            stock={true} 
            costo='$5' 
            id='3' 
            src='https://www.eltiempo.com/uploads/2021/04/15/6078c68c2f49b.jpeg' />

            <Products 
            name='Aros de Cebolla' 
            stock={true} 
            costo='$5' 
            id='4' 
            src='https://www.paulinacocina.net/wp-content/uploads/2021/12/aros-de-cebolla-fritos.jpg' />


        </section>
    );
}
